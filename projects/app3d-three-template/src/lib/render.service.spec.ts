import { TestBed } from '@angular/core/testing';
import { RenderService } from './render.service';


describe('RenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenderService = TestBed.get(RenderService);
    expect(service).toBeTruthy();
  });
});
