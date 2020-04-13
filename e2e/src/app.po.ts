import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
<<<<<<< HEAD
=======
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
