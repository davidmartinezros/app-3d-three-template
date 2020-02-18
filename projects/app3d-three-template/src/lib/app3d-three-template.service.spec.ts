import { TestBed } from '@angular/core/testing';

import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';

describe('App3dThreeTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngineApp3dThreeTemplateService = TestBed.get(EngineApp3dThreeTemplateService);
    expect(service).toBeTruthy();
  });
});
