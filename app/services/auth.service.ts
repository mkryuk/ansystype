import { IUser } from "interfaces/iuser";
import { IAuthService } from "interfaces/iauthservice";
import { } from "angular-local-storage";

export class AuthService implements IAuthService {
  static $inject = ["$http", "$q", "$window"];
  public loggedInUser: IUser;
  constructor(
    private httpService: ng.IHttpService,
    private qService: ng.IQService,
    private windowService: ng.IWindowService
  ) { }

  logIn(user: IUser): ng.IPromise<boolean> {
    return this.httpService.get("app/data/users.json")
      .then(result => (result.data as { users: Array<IUser> }).users)
      .then(users => {
        users.filter(u => u.username === user.username && u.email === user.email)
          .forEach(u => {
            this.loggedInUser = u;
            this.windowService.localStorage.setItem("user", JSON.stringify(u));
          });
        return users.some(u => u.username === user.username && u.email === user.email);
      });
  }

  logOut(): ng.IPromise<boolean> {
    return this.qService((resolve, reject) => {
      this.loggedInUser = null;
      this.windowService.localStorage.removeItem("user");
    });
  }

  getLoggedInUser(): ng.IPromise<IUser> {
    return this.qService((resolve, reject) => {
      let user = this.windowService.localStorage.getItem("user");
      this.loggedInUser = JSON.parse(user);
      resolve(this.loggedInUser);
    });
  }
}
