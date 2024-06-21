import { Test, TestingModule } from '@nestjs/testing';
import { SuscribersController } from './suscribers.controller';

describe('SuscribersController', () => {
  let controller: SuscribersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuscribersController],
    }).compile();

    controller = module.get<SuscribersController>(SuscribersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
