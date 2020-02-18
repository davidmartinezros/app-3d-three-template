import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';
import { MyService } from './my-service';
import { MyComponent } from './my-component';

@NgModule({
  declarations: [
    App3dThreeTemplateComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [
    MyComponent
  ]
})
export class AppModule { }
