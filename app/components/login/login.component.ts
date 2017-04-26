import { IUser } from "interfaces/iuser";
import { IAuthService } from "interfaces/iauthservice";

export class LoginComponent {
  static $inject = ["$state", "authService"];
  user: IUser;
  constructor(private stateService: ng.ui.IStateService, private authService: IAuthService) {
  }

  logIn(user: IUser) {
    if (!user || !user.username || !user.email) {
      return;
    }
    this.authService.logIn(user)
      .then(result => {
        if (result) {
          this.stateService.go("home");
        }
      });
  }
}

export default function loginComponent(): ng.IDirective {
  return {
    restrict: "E",
    controller: LoginComponent,
    controllerAs: "loginCtrl",
    templateUrl: "app/components/login/login.component.html",
    scope: {},
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: LoginComponent) => {
    }
  };
}
