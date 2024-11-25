ThisBuild / scalaVersion := "2.13.15"

ThisBuild / version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    name := """BattleshipWeb""",
    scalacOptions += "-Ytasty-reader",
    libraryDependencies ++= Seq(
      guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test,
      "org.scala-lang.modules" %% "scala-swing" % "3.0.0" cross CrossVersion.for3Use2_13,
    )
  )