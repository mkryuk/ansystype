import * as angular from "angular";
import { MainController } from "controllers/mainController/main.controller";
import { Router } from "routes/app.routes";
import uiRouter from "angular-ui-router";
// services
import { ngModule as servicesModule } from "services/services.module";
// modules
import { ngModule as loginModule } from "components/login/login.module";
import { ngModule as mainMenuModule } from "components/menu/main.menu.module";
import { ngModule as todosModule } from "components/todos/todos.module";

// creating main app module and MainController
let ngModule = angular
  .module("app", [
    uiRouter,
    servicesModule.name,
    loginModule.name,
    mainMenuModule.name,
    todosModule.name
  ])
  .config(Router)
  .controller("MainController", MainController)

export {
  ngModule
};
