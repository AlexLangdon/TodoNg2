import { KeepNg2Page } from './app.po';

describe('keep-ng2 App', function() {
  let page: KeepNg2Page;

  beforeEach(() => {
    page = new KeepNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
