import { AtomWebAccessibilityPage } from './app.po';

describe('atom-web-accessibility App', () => {
  let page: AtomWebAccessibilityPage;

  beforeEach(() => {
    page = new AtomWebAccessibilityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
