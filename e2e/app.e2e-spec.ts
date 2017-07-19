import { AppRoutePage } from './app.po';

describe('app-route App', () => {
  let page: AppRoutePage;

  beforeEach(() => {
    page = new AppRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
