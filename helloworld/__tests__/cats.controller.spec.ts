import { isEqual } from 'lodash'

import { Cat } from 'src/modules/cats/interfaces/cat.interface'
import { CatsController } from '../src/modules/cats/cats.controller'
import { CatsService } from '../src/modules/cats/cats.service'

describe('CatsController', () => {
  let catsController: CatsController
  let catsService: CatsService

  beforeEach(() => {
    catsService = new CatsService()
    catsController = new CatsController(catsService)
  })

  describe('findAll()', () => {
    it('should return an array of cats', async () => {
      const expected: Cat[] = [
        {
          name: 'kitt-y',
          age: 1,
          breed: 'korshot',
        }
      ]
      jest.spyOn(catsService, 'findAll').mockImplementation(() => expected)

      const result = await catsController.findAll()
      expect(Array.isArray(result)).toBeTruthy()
      expect(new Set(result)).toEqual(new Set(expected))
    })
  })

  describe('create()', () => {
    it('should ', async () => {
      const payload = {
        name: 'doggy',
        age: 2,
        breed: 'korshot',
      }

      await catsController.create(payload)
      const result = await catsController.findAll((o: Cat) => isEqual(o, payload))
      expect(result.length).not.toBe(0)
    })
  })

  it('findOne()', async () => {
    const expected = '#1 cat'
    expect(await catsController.findOne('1')).toBe(expected)
  })
})
