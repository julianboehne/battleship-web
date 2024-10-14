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
  def index() = Action { implicit request: Request[AnyContent] =>
    val text = controller.toString
    val htmlText = s"<pre>${text.replace("\n", "<br>")}</pre>"
    val html: Html = Html(htmlText)
    Ok(views.html.main(title = "Battleship")(content = html))
//    Ok(views.html.index())
  }
}
