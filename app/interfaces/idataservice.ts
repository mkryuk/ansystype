import { ITodo } from "itodo";
import { IUser } from "interfaces/iuser";

export interface IDataService {
  getAllTodos(): ng.IPromise<Array<ITodo>>;
  getAllCompletedTodos(): ng.IPromise<Array<ITodo>>;
  getUserTodos(user: IUser): ng.IPromise<Array<ITodo>>;
  getUserCompletedTodos(user: IUser): ng.IPromise<Array<ITodo>>;
  getUserUnCompletedTodos(user: IUser): ng.IPromise<Array<ITodo>>;
}
