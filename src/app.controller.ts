import { Controller, Get } from '@nestjs/common';

@Controller('p')
export class AppController {
  @Get()
  home() {
    return 'Welcom to my Movie API';
  }
}
