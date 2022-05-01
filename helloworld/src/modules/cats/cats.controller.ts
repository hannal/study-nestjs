import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'
import { ICreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<string[]> {
    return ['hello']
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): string {
    return `#${id} cat`
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: ICreateCatDto): string {
    return `create a new cat aka ${data.name}`
  }
}
