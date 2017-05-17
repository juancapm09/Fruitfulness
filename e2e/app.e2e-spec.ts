import { FruitfulnessPage } from './app.po';

describe('fruitfulness App', () => {
  let page: FruitfulnessPage;

  beforeEach(() => {
    page = new FruitfulnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
