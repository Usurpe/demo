import { Controller, Get } from '@nestjs/common';

@Controller('example') // Base path for the controller
export class ExampleController {
  @Get() // Handles GET requests to "/example"
  getExample(): string {
    return 'This is a response from the ExampleController!';
  }
}
