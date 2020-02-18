import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineApp3dThreeTemplateService implements OnDestroy {

  protected canvas: HTMLCanvasElement;
  protected renderer: THREE.WebGLRenderer;
  protected camera: THREE.PerspectiveCamera;
  protected scene: THREE.Scene;
  protected light: THREE.AmbientLight;

  //private axesHelper: THREE.AxesHelper;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

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
  
  //implement for create objects in scene
  createObjects(): void {
    //this.axesHelper = new THREE.AxesHelper( 200 );
    //this.scene.add( this.axesHelper );

    //this.camera.lookAt(0,0,0);
  }

  //implement for render animation of objects
  renderObjects() {
    //this.axesHelper.rotateX(0.01);
    //this.axesHelper.rotateY(0.001);
    //this.axesHelper.rotateZ(0.005);

    //this.camera.lookAt(this.axesHelper.position);
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
