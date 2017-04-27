import { TodosController } from 'components/todos/todos.controller';

export const TodosComponent: ng.IComponentOptions = {
  templateUrl: "app/components/todos/todos.component.html",
  controller: TodosController,
  controllerAs: "todosCtrl"
};
