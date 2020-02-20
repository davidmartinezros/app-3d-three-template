import { NgModule } from '@angular/core';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';
import { MyComponent } from './my-component.component';



@NgModule({
  declarations: [App3dThreeTemplateComponent,MyComponent],
  imports: [
  ],
  providers: [ EngineApp3dThreeTemplateService],
  exports: [App3dThreeTemplateComponent,MyComponent]
})
export class App3dThreeTemplateModule { }
