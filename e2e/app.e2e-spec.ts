import { ProjectsTodoPage } from './app.po';

describe('projects-todo App', () => {
  let page: ProjectsTodoPage;

  beforeEach(() => {
    page = new ProjectsTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
