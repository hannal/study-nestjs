import { CatsController } from "../src/modules/cats/cats.controller";
import { ICreateCatDto } from "../src/modules/cats/create-cat.dto";

describe('CatsController', () => {
  let catsController: CatsController

  beforeEach(() => {
    catsController = new CatsController();
  });

  it('findAll()', async () => {
    const expected = ['hello']
    const result = await catsController.findAll()
    expect(Array.isArray(result)).toBeTruthy()
    expect(new Set(result)).toEqual(new Set(expected))
  })

  it('create()', async () => {
    const payload = {
      name: 'doggy',
    }
    const expected = `aka ${payload.name}`
    expect(await catsController.create(payload)).toMatch(expected)
  })

  it('findOne()', async () => {
    const expected = '#1 cat'
    expect(await catsController.findOne('1')).toBe(expected)
  })
});
