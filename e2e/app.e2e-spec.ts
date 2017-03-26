import { FbTestPage } from './app.po';

describe('fb-test App', () => {
  let page: FbTestPage;

  beforeEach(() => {
    page = new FbTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
