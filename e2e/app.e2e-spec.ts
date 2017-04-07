import { PongTrackerPage } from './app.po';

describe('pong-tracker App', () => {
  let page: PongTrackerPage;

  beforeEach(() => {
    page = new PongTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
