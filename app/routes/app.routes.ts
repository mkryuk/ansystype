import { MainController } from "controllers/mainController/main.controller";

export class Router {
  static $inject = ["$stateProvider", "$urlRouterProvider"];
  constructor(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
  ) {
    // for any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    //
    // now set up the states
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/views/home.layout.html",
        controller: MainController,
        controllerAs: "mainCtrl"
      })
      .state("todos", {
        url: "/todos",
        templateUrl: "app/views/todo.layout.html"
      })
      .state("photos", {
        url: "/photos",
        templateUrl: "app/views/photos.layout.html"
      })
      .state("login", {
        url: "/login",
        templateUrl: "app/views/login.layout.html"
      });
  }
}
