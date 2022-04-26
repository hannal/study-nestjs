import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'hello'
    }
}
