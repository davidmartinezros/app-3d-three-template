import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { RenderService } from './render.service';

@Injectable({
  providedIn: 'root',
})
export class EngineApp3dThreeTemplateService implements OnDestroy {

  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;

  private frameId: number = null;

  public constructor(
    private ngZone: NgZone,
    private renderService: RenderService) {}

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(55.0, window.innerWidth / window.innerHeight, 0.5, 3000000);
		this.camera.position.set(200, 200, 200);
    
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.createObjects();

  }
  
  createObjects() {
    if(this.renderService) {
      this.renderService.createObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
    }
  }
  
  renderObjects() {
    if(this.renderService) {
      this.renderService.renderObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
    }
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.renderObjects();

    this.renderer.render(this.scene, this.camera);
  }

  animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

}
