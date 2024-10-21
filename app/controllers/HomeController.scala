package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import aview.TUI
import core.controller.ControllerInterface
import core.controller.controllerImpl.{APIController, Controller, KafkaConsumer}
import core.model.gridImpl.{Grid, Ship, ShipContainer, Shots}
import play.twirl.api.Html

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val grid: Grid = Grid(10, Shots(Vector[Int](), Vector[Int]()), ShipContainer(Vector[Ship]()))
  private val controller = new Controller(grid)
  private val tui: TUI = new TUI(controller)

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
    val text = controller.toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.field(title = "Battleship")(content = html))
  }

  def isLost() = Action { implicit request: Request[AnyContent] =>
    val text = controller.isLost.toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.menu(title = "isLost")(content = html))
  }

  def GridShipToString() = Action { implicit request: Request[AnyContent] =>
    val text = controller.GridShipToString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.shipfield(title = "GridShipToString")(content = html))
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


}
