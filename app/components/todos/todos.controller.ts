import { IAuthService } from "interfaces/iauthservice";
import { IDataService } from "interfaces/idataservice";
import { ITodo } from "interfaces/itodo";
import { IUser } from "interfaces/iuser";

export class TodosController implements ng.IController {
  static $inject = ["DataService", "AuthService", "$state"];
  public data: Array<ITodo>;
  public loggedInUser: IUser;

  public loadData() {
    return this.dataService.getUserTodos(this.authService.loggedInUser)
      .then(todos => {
        this.data = todos;
      });
  }

  public getAllCompleted() {
    return this.dataService.getUserCompletedTodos(this.authService.loggedInUser)
      .then(todos => {
        this.data = todos;
      });
  }

  public getAllUnCompleted() {
    return this.dataService.getUserUnCompletedTodos(this.authService.loggedInUser)
      .then(todos => {
        this.data = todos;
      });
  }

  constructor(
    private dataService: IDataService,
    private authService: IAuthService,
    private stateService: ng.ui.IStateService, ) {
    this.data = [];
    this.authService.getLoggedInUser()
      .then(user => {
        if (!user) {
          this.stateService.go("home");
          return;
        }
        this.loggedInUser = user;
      });
  }
}
