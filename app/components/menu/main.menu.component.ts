import { IAuthService } from "interfaces/iauthservice";
export class MainMenuComponent {
  username: string;
  static $inject = ["$state", "authService"];
  constructor(private stateService: ng.ui.IStateService, private authService: IAuthService) {
  }

  isUserLoggedIn() {
    return this.authService.loggedInUser;
  }

  // loggedInUserChanged(newVal, oldVal) {
  // }

  logOut() {
    this.authService.logOut();
    this.stateService.go("home");
  }

}

export default function mainMenuComponent(): ng.IDirective {
  return {
    restrict: "E",
    controllerAs: "mainMenuCtrl",
    controller: MainMenuComponent,
    templateUrl: "app/components/menu/main.menu.component.html",
    scope: {},
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: MainMenuComponent) => {
      // scope.$watch(() => ctrl.getLoggedInUser(), (newVal, oldVal) => ctrl.loggedInUserChanged(newVal, oldVal));
    }
  };
}
