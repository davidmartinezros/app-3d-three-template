import { NgModule } from '@angular/core';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';
import { MyRenderService } from './my-service.service';
import { RenderService } from './render.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [App3dThreeTemplateComponent],
  imports: [CommonModule],
  providers: [{ provide: RenderService, useClass: MyRenderService }],
  exports: [App3dThreeTemplateComponent]
})
export class App3dThreeTemplateModule { }
