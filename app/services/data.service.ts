import { ITodo } from "../interfaces/itodo";
import { IUser } from "../interfaces/iuser.js";
import { IDataService } from "../interfaces/idataservice";

export class DataService implements IDataService {

  static $inject = ["$http", "$q"];
  constructor(
    private httpService: ng.IHttpService,
    private qService: ng.IQService
  ) { }

  getAllTodos(): angular.IPromise<ITodo[]> {
    return this.httpService
      .get("app/data/todos.json")
      .then(result => (result.data as { todos: Array<ITodo> }).todos);
  }
  getAllCompletedTodos(): angular.IPromise<ITodo[]> {
    return this.httpService
      .get("app/data/todos.json")
      .then(result => (result.data as { todos: Array<ITodo> }).todos.filter(td => td.completed));
  }
  getUserTodos(user: IUser): angular.IPromise<ITodo[]> {
    return this.httpService
      .get("app/data/todos.json")
      .then(result => (result.data as { todos: Array<ITodo> }).todos.filter(td => td.userId === user.id));
  }
  getUserCompletedTodos(user: IUser): angular.IPromise<ITodo[]> {
    return this.httpService
      .get("app/data/todos.json")
      .then(result => (result.data as { todos: Array<ITodo> }).todos.filter(td => td.completed && td.userId === user.id));
  }

  getUserUnCompletedTodos(user: IUser): angular.IPromise<ITodo[]> {
    return this.httpService
      .get("app/data/todos.json")
      .then(result => (result.data as { todos: Array<ITodo> }).todos.filter(td => !td.completed && td.userId === user.id));
  }
}
