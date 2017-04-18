import { IAuthService } from "interfaces/iauthservice";

export default class MainController {
  message: string;
  counter: number;
  constructor(private authService: IAuthService) {
    this.message = "Hello AngularJS, TypeScript & SystemJS";
    this.counter = 0;
    authService.getLoggedInUser();
  }

  increaseCounter() {
    this.counter++;
  }

}
