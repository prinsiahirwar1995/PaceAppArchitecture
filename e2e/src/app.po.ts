import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
