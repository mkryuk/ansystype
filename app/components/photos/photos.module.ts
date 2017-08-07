import * as angular from 'angular';
import { PhotosController } from 'components/photos/photos.controller';
import { PhotosComponent } from 'components/photos/photos.component';
import { ngModule as servicesModule } from "services/services.module";

let ngModule = angular.module("photos.module", [
  servicesModule.name
]);

ngModule
  .controller("PhotosController", PhotosController)
  .component("photos", PhotosComponent);

export {
  ngModule,
  PhotosController,
  PhotosComponent
}
