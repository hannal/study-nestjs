import { Injectable, Scope } from '@nestjs/common'
import { Cat } from './interfaces/cat.interface'

// https://docs.nestjs.com/fundamentals/injection-scopes
@Injectable({ scope: Scope.DEFAULT })
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(predicate?: (item: Cat) => boolean): Cat[] {
    return predicate ? this.cats.filter(predicate) : this.cats
  }
}
