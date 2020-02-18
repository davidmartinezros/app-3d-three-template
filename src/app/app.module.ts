import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App3dThreeTemplateComponent } from './app-3d-three-template.component';
import { EngineApp3dThreeTemplateService } from './engine-app-3d-three-template.service';

@NgModule({
  declarations: [
    App3dThreeTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EngineApp3dThreeTemplateService
  ],
  bootstrap: [
    App3dThreeTemplateComponent
  ]
})
export class AppModule { }
