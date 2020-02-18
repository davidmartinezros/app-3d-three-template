import { NgModule } from '@angular/core';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';



@NgModule({
  declarations: [App3dThreeTemplateComponent],
  imports: [
  ],
  providers: [ EngineApp3dThreeTemplateService],
  exports: [App3dThreeTemplateComponent]
})
export class App3dThreeTemplateModule { }
