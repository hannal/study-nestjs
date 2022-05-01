import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Scope,
} from '@nestjs/common'

import { ICreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

// https://docs.nestjs.com/fundamentals/injection-scopes#controller-scope
@Controller({
  path: 'cats',
  scope: Scope.REQUEST,
})
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(predicate?: (item: Cat) => boolean): Promise<Cat[]> {
    return this.catsService.findAll(predicate)
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): string {
    return `#${id} cat`
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: ICreateCatDto) {
    this.catsService.create(data)
  }
}
