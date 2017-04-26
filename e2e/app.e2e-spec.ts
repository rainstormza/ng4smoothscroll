import { SmoothscrollPage } from './app.po';

describe('smoothscroll App', () => {
  let page: SmoothscrollPage;

  beforeEach(() => {
    page = new SmoothscrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
