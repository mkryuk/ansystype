export default class MainController {
  message: string;
  counter: number;
  constructor() {
    this.message = "Hello AngularJS, TypeScript & SystemJS";
    this.counter = 0;
  }

  increaseCounter() {
    this.counter++;
  }
}
