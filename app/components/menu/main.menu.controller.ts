import { IAuthService } from 'interfaces/iauthservice';

export class MainMenuController implements ng.IController {
  username: string;
  static $inject = ["$state", "AuthService"];
  constructor(private stateService: ng.ui.IStateService, private authService: IAuthService) {
  }

  isUserLoggedIn() {
    return this.authService.loggedInUser;
  }

  logOut() {
    this.authService.logOut();
    this.stateService.go("home");
  }

}
