import { TestBed } from '@angular/core/testing';
import { MyRenderService } from './my-service.service';


describe('MyRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRenderService = TestBed.get(MyRenderService);
    expect(service).toBeTruthy();
  });
});
