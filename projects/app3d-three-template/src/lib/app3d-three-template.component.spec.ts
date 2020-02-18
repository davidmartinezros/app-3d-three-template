import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App3dThreeTemplateComponent } from './app3d-three-template.component';

describe('App3dThreeTemplateComponent', () => {
  let component: App3dThreeTemplateComponent;
  let fixture: ComponentFixture<App3dThreeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App3dThreeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App3dThreeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
