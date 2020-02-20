import { Component } from '@angular/core';
import { MyService } from './my-service.service';
import { App3dThreeTemplateComponent } from './app3d-three-template.component';

@Component({
  selector: 'app-my-component',
  template: `
    <canvas #rendererCanvas id="renderCanvas"></canvas>
  `,
  styles: []
})
export class MyComponent extends App3dThreeTemplateComponent {

  constructor(private engServ1: MyService) {
      super(engServ1);
  }

}