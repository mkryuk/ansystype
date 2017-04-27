import * as angular from 'angular';
import { AuthService } from 'services/auth.service';
import { DataService } from 'services/data.service';
let ngModule = angular.module("app.services.module", []);

ngModule
  .service("AuthService", AuthService)
  .service("DataService", DataService);

export {
  ngModule,
  AuthService,
  DataService
};
