import { EstudianteWebPage } from './app.po';

describe('estudiante-web App', () => {
  let page: EstudianteWebPage;

  beforeEach(() => {
    page = new EstudianteWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
