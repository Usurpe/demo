import { Test, TestingModule } from '@nestjs/testing';
import { ApiExampleController } from './api-example.controller';

describe('ApiExampleController', () => {
  let controller: ApiExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiExampleController],
    }).compile();

    controller = module.get<ApiExampleController>(ApiExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
