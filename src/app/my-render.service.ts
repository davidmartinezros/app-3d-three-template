import * as THREE from 'three';
import { Injectable, ElementRef } from '@angular/core';
import { RenderService } from './render.service';

@Injectable({
  providedIn: 'root'
})
export class MyRenderService implements RenderService {

    private axesHelper: THREE.AxesHelper;
    
    //implement for create objects in scene
    createObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight) {
        this.axesHelper = new THREE.AxesHelper( 200 );
        scene.add( this.axesHelper );
    
        camera.lookAt(0,0,0);
    }

    //implement for render animation of objects
    renderObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight) {
      this.axesHelper.rotateX(0.01);
    }

}