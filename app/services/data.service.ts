import { ITodo } from "../interfaces/itodo";
import { IDataService } from "../interfaces/idataservice";

export default class DataService implements IDataService {
  private httpService: ng.IHttpService;
  private qService: ng.IQService;
  static $inject = ["$http", "$q"];
  constructor($http: ng.IHttpService, $q: ng.IQService) {
    this.httpService = $http;
    this.qService = $q;
  }

  getAllData = () => {
    return this.httpService
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.data);

    // return this.qService((resolve, reject) => {
    //   var result: Array<ITodo> = [
    //     {
    //       "userId": 1,
    //       "id": 1,
    //       "title": "delectus aut autem",
    //       "completed": false
    //     },
    //     {
    //       "userId": 1,
    //       "id": 2,
    //       "title": "quis ut nam facilis et officia qui",
    //       "completed": false
    //     },
    //     {
    //       "userId": 1,
    //       "id": 3,
    //       "title": "fugiat veniam minus",
    //       "completed": false
    //     },
    //     {
    //       "userId": 1,
    //       "id": 4,
    //       "title": "et porro tempora",
    //       "completed": true
    //     },
    //     {
    //       "userId": 1,
    //       "id": 5,
    //       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    //       "completed": false
    //     },
    //   ];
    //   resolve(result);
    // });
  }
};
