import { ITodo } from "../interfaces/itodo";
import { IDataService } from "../interfaces/idataservice";

export class TodosDirective {
  static $inject = ["dataService"];
  private dataService: IDataService;
  public data: Array<ITodo>;

  public loadData() {
    return this.dataService.getAllData()
      .then(todos => {
        this.data = todos;
        return this.data;
      });
  }

  public getAllCompleted() {
    return this.dataService.getAllData()
      .then(todos => {
        let result = todos.filter(todo => todo.completed);
        this.data = result;
        return this.data;
      });
  }

  constructor(_dataService: IDataService) {
    this.data = [];
    this.dataService = _dataService;
  }
}

export default function todosDirective(): ng.IDirective {
  return {
    restrict: "E",
    controller: TodosDirective,
    controllerAs: "grtCtrl",
    templateUrl: "app/directives/todos.template.html",
    scope: {},
    link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
    }
  };
}
