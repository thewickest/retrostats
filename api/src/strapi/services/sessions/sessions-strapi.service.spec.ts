import { Test, TestingModule } from '@nestjs/testing';
import { SessionsStrapiService } from './sessions-strapi.service';

describe('SessionsStrapiService', () => {
  let service: SessionsStrapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionsStrapiService],
    }).compile();

    service = module.get<SessionsStrapiService>(SessionsStrapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
