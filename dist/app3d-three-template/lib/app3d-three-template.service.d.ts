import { ElementRef, OnDestroy, NgZone } from '@angular/core';
import { RenderService } from './render.service';
export declare class EngineApp3dThreeTemplateService implements OnDestroy {
    private ngZone;
    private renderService;
    private canvas;
    private renderer;
    private camera;
    private scene;
    private light;
    private frameId;
    constructor(ngZone: NgZone, renderService: RenderService);
    ngOnDestroy(): void;
    createScene(canvas: ElementRef<HTMLCanvasElement>): void;
    createObjects(): void;
    renderObjects(): void;
    render(): void;
    animate(): void;
    resize(): void;
}
