import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './engine-app-3d-three-template.service';

@Component({
  selector: 'app-3d-three-template',
  templateUrl: './app-3d-three-template.component.html'
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
