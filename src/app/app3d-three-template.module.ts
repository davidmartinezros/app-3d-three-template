import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';
import { MyRenderService } from './my-render.service';
import { RenderService } from './render.service';

@NgModule({
  declarations: [
    App3dThreeTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: RenderService, useClass: MyRenderService }
  ],
  bootstrap: [
    App3dThreeTemplateComponent
  ]
})
export class App3dThreeTemplateModule { }
