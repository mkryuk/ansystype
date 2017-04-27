import * as angular from 'angular';
import { MainMenuController } from 'components/menu/main.menu.controller';
import { MainMenuComponent } from 'components/menu/main.menu.component';
import { ngModule as servicesModule } from "services/services.module";

let ngModule = angular.module("main.menu.module", [
  servicesModule.name
]);

ngModule
  .controller("MainMenuController", MainMenuController)
  .component("mainMenu", MainMenuComponent)

export {
  ngModule,
  MainMenuController,
  MainMenuComponent
}
