import { IAuthService } from "interfaces/iauthservice";
import { MainMenuController } from 'components/menu/main.menu.controller';

export const MainMenuComponent: ng.IComponentOptions = {
  templateUrl: "app/components/menu/main.menu.component.html",
  controller: MainMenuController,
  controllerAs: "mainMenuCtrl",
};
