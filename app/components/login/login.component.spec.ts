import * as angular from 'angular';
import { AuthService } from 'services/auth.service';
import { IAuthService } from 'interfaces/iauthservice';
import { IUser } from 'interfaces/iuser';
import { LoginController } from 'components/login/login.controller';
import { ngModule as loginModule } from "components/login/login.module";

describe("Login Component", () => {
  let AuthService: IAuthService,
    StateService: ng.ui.IStateService,
    ctrl: LoginController,
    digest: () => void,
    user: IUser = {
      username: "test",
      email: "test",
      id: null,
      name: null,
      address: null,
      phone: null,
      website: null,
      company: null
    };

  beforeEach(() => {
    StateService = jasmine.createSpyObj<ng.ui.IStateService>("StateService", ["go"]);
    AuthService = jasmine.createSpyObj<IAuthService>("AuthService", ["logIn"]);
  });

  beforeEach(() => {
    angular.mock.module(loginModule.name);
    angular.mock.inject(($controller: ng.IControllerService, $q: ng.IQService, $rootScope: ng.IRootScopeService) => {
      ctrl = $controller<LoginController>("LoginController", { $state: StateService, AuthService });
      digest = () => $rootScope.$digest();
    });
  });

  it("should create controller", () => {
    expect(ctrl).not.toBe(undefined);
  });

  it("should call logIn and redirect to home", () => {
    angular.mock.inject(($q: ng.IQService) => {
      (<jasmine.Spy>AuthService.logIn).and.returnValue($q.when(true));
    });

    ctrl.logIn(user);
    digest();

    expect(AuthService.logIn).toHaveBeenCalledWith(user);
    expect(StateService.go).toHaveBeenCalledWith("home");
  });

  it("should call logIn and not redirect to home", () => {
    angular.mock.inject(($q: ng.IQService) => {
      (<jasmine.Spy>AuthService.logIn).and.returnValue($q.when(false));
    });

    ctrl.logIn(user);
    digest();

    expect(AuthService.logIn).toHaveBeenCalledWith(user);
    expect(StateService.go).not.toHaveBeenCalled();
  });

  it("should not call logIn", () => {
    ctrl.logIn(null);
    digest();

    expect(AuthService.logIn).not.toHaveBeenCalled();
    expect(StateService.go).not.toHaveBeenCalled();
  });
});
