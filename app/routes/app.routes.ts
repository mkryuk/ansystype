import MainController from "controllers/mainController/main.controller";

export default class Router {
  static $inject = ["$stateProvider", "$urlRouterProvider"];
  constructor($stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) {

    // for any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    //
    // now set up the states
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/views/home.html",
        controller: MainController,
        controllerAs: "mainCtrl"
      })
      .state("todos", {
        url: "/todos",
        templateUrl: "app/views/directive.html"
      });
  }
}
