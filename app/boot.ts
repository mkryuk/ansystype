import * as angular from "angular";
import {ngModule as app} from "app.module";

// bootstrap the angular app module
angular.element(document).ready(() => {
  angular.bootstrap(document.documentElement, [app.name]);
});
