import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';

@Component({
  selector: 'app3d-three-template',
  template: `
    <div class="engine-wrapper">
      <canvas #rendererCanvas id="renderCanvas"></canvas>
    </div>
  `,
  styles: []
})
export class App3dThreeTemplateComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: EngineApp3dThreeTemplateService) { }

  ngOnInit() {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
