import { ElementRef, OnInit } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';
export declare class App3dThreeTemplateComponent implements OnInit {
    private engServ;
    rendererCanvas: ElementRef<HTMLCanvasElement>;
    constructor(engServ: EngineApp3dThreeTemplateService);
    ngOnInit(): void;
}
