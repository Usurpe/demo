import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class  ApiExampleController {
  @Get()
  getExample(): string {
    return 'This is a response from a GET endpoint!';
  }
}
