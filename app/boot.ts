import * as angular from "angular";
import { MainController } from "controllers/mainController/main.controller";
import Router from "routes/app.routes";
import uiRouter from "angular-ui-router";
// services
import authService from "services/auth.service";
import dataService from "services/data.service";
// components
import loginComponent from "components/login/login.component";
import todosComponent from "components/todos/todos.component";
import mainMenuComponent from "components/menu/main.menu.component";

// creating main app module and MainController
angular
  .module("app", [uiRouter])
  .config(Router)
  .controller("MainController", MainController)
  // services
  .service("authService", authService)
  .service("dataService", dataService)
  // components
  .directive("login", loginComponent)
  .directive("mainMenu", mainMenuComponent)
  .directive("todos", todosComponent);

// bootstrap the angular app module
angular
  .bootstrap(document.documentElement, ["app"]);
