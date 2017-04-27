import * as angular from 'angular';
import { TodosController } from 'components/todos/todos.controller';
import { TodosComponent } from 'components/todos/todos.component';
import { ngModule as servicesModule } from "services/services.module";

let ngModule = angular.module("todos.module", [
  servicesModule.name
]);

ngModule
  .controller("TodosController", TodosController)
  .component("todos", TodosComponent);

export {
  ngModule,
  TodosController,
  TodosComponent
}
