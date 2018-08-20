import { async } from "@angular/core/testing";
import { browser, protractor } from "protractor";
import { AppPage } from "./app.po";

describe("sportapp App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });*/

  it("Zou tekst clubs moeten weergeven", () => {
    page.navigateTo();
    expect(page.getClubsButton().getText()).toEqual("Clubs");
  });
  it("Zou tekst club toevoegen moeten weergeven", () => {
    page.navigateTo();
    expect(page.getAddButton().getText()).toEqual("Club toevoegen");
  });

  /*it("Zou naar club lijst moeten routen", () => {
    page.navigateTo();
    let el = page.getClubsButton();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(el), 10000)  
    el.click();
    expect(page.getClubsText()).toContain("Overzicht van de clubs");
  });*/

  it("Zou naar club lijst moeten routen", async () => {
    page.navigateTo();
    let el = page.getAddButton();
    await el.click();

    expect(await page.getAddText()).toContain("Voeg een club toe!");
  });
});
