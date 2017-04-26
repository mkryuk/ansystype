import { IAuthService } from 'interfaces/iauthservice';
import { MainController } from "controllers/mainController/main.controller";

describe("MainController", () => {
  let controller: MainController;
  let mockService: IAuthService;

  beforeEach(() => {
    mockService = <IAuthService>{
      getLoggedInUser: jasmine.createSpy("getLoggedInUser"),
      logIn: jasmine.createSpy("logIn"),
      logOut: jasmine.createSpy("logOut"),
      loggedInUser: null
    };
    controller = new MainController(mockService);
  });

  it("should load logged in user", () => {
    expect(mockService.getLoggedInUser).toHaveBeenCalled();
  });

  it("should contain message", () => {
    expect(controller.message).toContain("AngularJS");
  });

  it("should check counter", () => {
    expect(controller.counter).toBe(0);
  });

  it("should increase counter", () => {
    controller.increaseCounter();
    expect(controller.counter).toBe(1);
  });
});
