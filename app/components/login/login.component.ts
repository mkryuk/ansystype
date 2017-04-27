import { LoginController } from "components/login/login.controller";

export const LoginComponent: ng.IComponentOptions = {
  templateUrl: "app/components/login/login.component.html",
  controller: LoginController,
  controllerAs: "loginCtrl"
};
