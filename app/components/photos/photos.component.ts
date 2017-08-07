import { PhotosController } from 'components/photos/photos.controller';

export const PhotosComponent: ng.IComponentOptions = {
  templateUrl: "app/components/photos/photos.component.html",
  controller: PhotosController,
  controllerAs: "photosCtrl"
};
