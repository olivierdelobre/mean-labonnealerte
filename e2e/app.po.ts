export class LabonnealertePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('labonnealerte-app h1')).getText();
  }
}
