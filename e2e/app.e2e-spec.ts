import { Project4Page } from './app.po';

describe('project4 App', () => {
  let page: Project4Page;

  beforeEach(() => {
    page = new Project4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
