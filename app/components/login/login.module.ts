import * as angular from 'angular';
import { LoginController } from 'components/login/login.controller';
import { LoginComponent } from 'components/login/login.component';
import { ngModule as servicesModule } from "services/services.module";

let ngModule = angular.module("login.module", [
  servicesModule.name
]);

ngModule
  .controller("LoginController", LoginController)
  .component("login", LoginComponent)

export {
  ngModule,
  LoginComponent,
  LoginController
}
