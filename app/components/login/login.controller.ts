import { IAuthService } from "interfaces/iauthservice";
import { IUser } from "interfaces/iuser";

export class LoginController implements ng.IController {
  static $inject = ["$state", "AuthService"];
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
