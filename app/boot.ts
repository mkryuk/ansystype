import * as angular from "angular";
import uiRouter from "angular-ui-router";
import dataService from "./services/data.service";
import todosDirective from "./directives/todos.directive";
import Router from "./routes/app.routes";
import MainController from "./controllers/mainController/main.controller";

// creating main app module and MainController
angular
  .module("app", [uiRouter])
  .config(Router)
  .controller("MainController", MainController)
  .service("dataService", dataService)
  .directive("todos", todosDirective);


// bootstrap the angular app module
angular
  .bootstrap(document.documentElement, ["app"]);
