import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './engine-app3d-three-template.service';

@Component({
  selector: 'app3d-three-template',
  templateUrl: './app3d-three-template.component.html',
  styleUrls: ['./app3d-three-template.scss'],
  encapsulation: ViewEncapsulation.None
})
export class App3dThreeTemplateComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: EngineApp3dThreeTemplateService) {
  }

  ngOnInit() {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
