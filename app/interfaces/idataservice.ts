import { ITodo } from "itodo";
export interface IDataService {
  getAllData: () => ng.IPromise<Array<ITodo>>;
}
