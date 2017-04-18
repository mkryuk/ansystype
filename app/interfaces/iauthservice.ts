import { IUser } from "interfaces/iuser";

export interface IAuthService {
  loggedInUser: IUser;
  logIn(user: IUser): ng.IPromise<boolean>;
  logOut(): ng.IPromise<boolean>;
  getLoggedInUser(): ng.IPromise<IUser>;
}
