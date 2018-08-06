import { browser, by, element, $ } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  /*getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }*/

  getClubsButton() {
    return element(by.css('[routerlink="/club/list"]'));
  }

  getAddButton() {
    return element(by.css('[routerlink="/club/add"]'));
  }

  getClubsText() {
    return element(by.css("app-club-list h1.hoofd")).getText(); //app-club-list
  }
  getAddText() {
    return $("app-root")
      .element(by.id("headh4"))
      .getText();
  }
}
