package controllers

import javax.inject._
import play.api.mvc._
import aview.TUI
import core.controller.ControllerInterface
import core.controller.controllerImpl.{APIController, Controller, KafkaConsumer}
import core.model.gridImpl.{Grid, Ship, ShipContainer, Shots}
import play.twirl.api.Html
import play.api.libs.json._

import akka.actor._
import play.api.libs.streams.ActorFlow
import scala.swing.Reactor
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents, implicit val system: ActorSystem) extends BaseController {

  private val grid: Grid = Grid(10, Shots(Vector[Int](), Vector[Int]()), ShipContainer(Vector[Ship]()))
  private val controller = new Controller(grid)
  private val tui: TUI = new TUI(controller)

  private val publisher = new ControllerPublisher()

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def welcome() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.welcome(title = "Battleship"))
  }

  def getGrid() = Action { implicit request: Request[AnyContent] =>
    val size = controller.grid.size
    val board = controller.grid.getBoard
    val pl1_x_shots = controller.player1.grid.shots.X
    val pl1_y_shots = controller.player1.grid.shots.Y
    val pl2_x_shots = controller.player2.grid.shots.X
    val pl2_y_shots = controller.player2.grid.shots.Y
    Ok(views.html.field(title = "Battleship Grid")(size = size)(board = board)(pl1_x_shots = pl1_x_shots, pl1_y_shots = pl1_y_shots, pl2_x_shots = pl2_x_shots, pl2_y_shots = pl2_y_shots))
  }

  def isLost() = Action { implicit request: Request[AnyContent] =>
    val text = controller.isLost.toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "isLost")(content = html))
  }

  def addShips1() = Action { implicit request: Request[AnyContent] =>
    val size = controller.grid.size
    val board = controller.grid.getBoard
    val ships_x : Vector[Int] = controller.player1.grid.ships.shipsVector.flatMap(_.x)
    val ships_y : Vector[Int] = controller.player1.grid.ships.shipsVector.flatMap(_.y)

    Ok(views.html.shipfield1(title = "Battleship Grid")(size = size)(board = board)(ships_x = ships_x, ships_y = ships_y))
  }

  def addShips2() = Action { implicit request: Request[AnyContent] =>
    val size = controller.grid.size
    val board = controller.grid.getBoard
    val ships_x : Vector[Int] = controller.player2.grid.ships.shipsVector.flatMap(_.x)
    val ships_y : Vector[Int] = controller.player2.grid.ships.shipsVector.flatMap(_.y)

    Ok(views.html.shipfield2(title = "Battleship Grid")(size = size)(board = board)(ships_x = ships_x, ships_y = ships_y))
  }

  def undo() = Action { implicit request: Request[AnyContent] =>
    controller.undo()
    val text = "undo"
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "undo")(content = html))
  }

  def redo() = Action { implicit request: Request[AnyContent] =>
    controller.redo()
    val text = "redo"
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "redo")(content = html))
  }

  def autoShips() = Action { implicit request: Request[AnyContent] =>
    val text = controller.autoShips().toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "autoShips")(content = html))
  }

  def setPlayerName(name: String) = Action { implicit request: Request[AnyContent] =>
    controller.setPlayerName(name)
    val text = "new Player: " + name
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "setPlayerName")(content = html))
  }

  def isValid(cords: String) = Action { implicit request: Request[AnyContent] =>
    val text = controller.isValid(cords).toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "isValid")(content = html))
  }

  def load() = Action { implicit request: Request[AnyContent] =>
    controller.loadGame()
    val text = "loaded"
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "load")(content = html))
  }

  def save() = Action { implicit request: Request[AnyContent] =>
    controller.saveGame()
    val text = "saved"
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "save")(content = html))
  }

  def reset() = Action { implicit request: Request[AnyContent] =>
    controller.resetGame()
    val text = "reseted"
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "reset")(content = html))
  }

  def player1AddShot(): Action[AnyContent] = Action { implicit request =>
    // Versuch, die Koordinaten aus verschiedenen Eingabemethoden zu lesen
    val xCoord = request.body.asFormUrlEncoded.flatMap(_.get("x").flatMap(_.headOption)).map(_.toInt)
      .orElse(request.body.asJson.flatMap(json => (json \ "x").asOpt[Int]))
      .orElse(request.getQueryString("x").map(_.toInt))

    val yCoord = request.body.asFormUrlEncoded.flatMap(_.get("y").flatMap(_.headOption)).map(_.toInt)
      .orElse(request.body.asJson.flatMap(json => (json \ "y").asOpt[Int]))
      .orElse(request.getQueryString("y").map(_.toInt))

    (xCoord, yCoord) match {
      case (Some(x), Some(y)) =>
        // Koordinate wird hinzugefügt
        controller.state = controller.player1
        controller.addShot(x, y)
        Ok(Json.obj("status" -> "success", "message" -> s"Player1 Shot added at ($x, $y)"))
      case _ =>
        BadRequest(Json.obj("status" -> "error", "message" -> "Invalid or missing coordinates"))
    }
  }

  def player2AddShot(): Action[AnyContent] = Action { implicit request =>
    // Versuch, die Koordinaten aus verschiedenen Eingabemethoden zu lesen
    val xCoord = request.body.asFormUrlEncoded.flatMap(_.get("x").flatMap(_.headOption)).map(_.toInt)
      .orElse(request.body.asJson.flatMap(json => (json \ "x").asOpt[Int]))
      .orElse(request.getQueryString("x").map(_.toInt))

    val yCoord = request.body.asFormUrlEncoded.flatMap(_.get("y").flatMap(_.headOption)).map(_.toInt)
      .orElse(request.body.asJson.flatMap(json => (json \ "y").asOpt[Int]))
      .orElse(request.getQueryString("y").map(_.toInt))

    (xCoord, yCoord) match {
      case (Some(x), Some(y)) =>
        // Koordinate wird hinzugefügt
        controller.state = controller.player2
        controller.addShot(x, y)
        Ok(Json.obj("status" -> "success", "message" -> s"Player2 Shot added at ($x, $y)"))
      case _ =>
        BadRequest(Json.obj("status" -> "error", "message" -> "Invalid or missing coordinates"))
    }
  }

  def player1AddShip(): Action[AnyContent] = Action { implicit request =>

    // Versuch, die Koordinaten aus verschiedenen Eingabemethoden zu lesen
    val cords1 = request.body.asFormUrlEncoded.flatMap(_.get("first").flatMap(_.headOption)).map(_.toString)
      .orElse(request.body.asJson.flatMap(json => (json \ "first").asOpt[String]))
      .orElse(request.getQueryString("first").map(_.toString))

    val cords2 = request.body.asFormUrlEncoded.flatMap(_.get("second").flatMap(_.headOption)).map(_.toString)
      .orElse(request.body.asJson.flatMap(json => (json \ "second").asOpt[String]))
      .orElse(request.getQueryString("second").map(_.toString))

    (cords1, cords2) match {
      case (Some(first), Some(second)) =>
        controller.state = controller.player1
        val x1 =controller.getX(first)
        val y1 = controller.getY(first)
        val x2 =controller.getX(second)
        val y2 = controller.getY(second)
        val check = controller.checkShip(x1, y1, x2, y2)

        if (check) {
          controller.set(x1, y1, x2, y2)
          Ok(Json.obj("status" -> "success", "message" -> s"Player1 Ship added at ($x1, $y1) to ($x2, $y2)"))
        } else {
          BadRequest(Json.obj("status" -> "error", "message" -> "Invalid or missing coordinates"))
        }
    }
  }


  def player2AddShip(): Action[AnyContent] = Action { implicit request =>

    // Versuch, die Koordinaten aus verschiedenen Eingabemethoden zu lesen
    val xCoord = request.body.asFormUrlEncoded.flatMap(_.get("first").flatMap(_.headOption)).map(_.toString)
      .orElse(request.body.asJson.flatMap(json => (json \ "first").asOpt[String]))
      .orElse(request.getQueryString("first").map(_.toString))

    val yCoord = request.body.asFormUrlEncoded.flatMap(_.get("second").flatMap(_.headOption)).map(_.toString)
      .orElse(request.body.asJson.flatMap(json => (json \ "second").asOpt[String]))
      .orElse(request.getQueryString("second").map(_.toString))

    (xCoord, yCoord) match {
      case (Some(first), Some(second)) =>
        controller.state = controller.player2
        val x1 =controller.getX(first)
        val y1 = controller.getY(first)
        val x2 =controller.getX(second)
        val y2 = controller.getY(second)
        val check = controller.checkShip(x1, y1, x2, y2)

        if (check) {
          controller.set(x1, y1, x2, y2)
          Ok(Json.obj("status" -> "success", "message" -> s"Player1 Ship added at ($x1, $y1) to ($x2, $y2)"))
        } else {
          BadRequest(Json.obj("status" -> "error", "message" -> "Invalid or missing coordinates"))
        }
    }
  }


  def shipsReady(player: Int) = Action { implicit request: Request[AnyContent] =>
    if (player == 1) Ok(Json.obj("status" -> "success", "ready" -> !controller.player1.grid.ships.shipCountValid()))
    else Ok(Json.obj("status" -> "success", "ready" -> !controller.player2.grid.ships.shipCountValid()))
  }

  def websocket = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect received")
      ActorFactory.create(out)
    }
  }

  object ActorFactory {
    def create(out: ActorRef) = {
      Props(new WebSocketActor(out))
    }
  }

  class WebSocketActor(out: ActorRef) extends Actor with Reactor {
    listenTo(publisher)
    def receive = {
      case msg: String =>
        out ! ("I received your message: " + msg)
    }

    reactions += {
      case event: ReloadAll => out ! ("reloadAll")
      case event: ReloadGame => out ! ("reloadGame")
      case event: ReloadShots => out ! ("ReloadShots")
      case event: ReloadShips => out ! ("ReloadShips")
    }
  }



}
