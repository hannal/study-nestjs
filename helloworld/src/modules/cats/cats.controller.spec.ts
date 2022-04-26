import { CatsController } from "./cats.controller";

describe('CatsController', () => {
  let catsController: CatsController

  beforeEach(() => {
    catsController = new CatsController();
  });

  it('', async () => {
    const result = 'hello'
    expect(await catsController.findAll()).toBe(result)
  })
});
