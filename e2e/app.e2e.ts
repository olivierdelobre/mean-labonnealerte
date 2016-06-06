import { LabonnealertePage } from './app.po';

describe('labonnealerte App', function() {
  let page: LabonnealertePage;

  beforeEach(() => {
    page = new LabonnealertePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('labonnealerte works!');
  });
});
