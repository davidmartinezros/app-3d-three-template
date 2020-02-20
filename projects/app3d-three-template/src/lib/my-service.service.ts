import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';

@Injectable({
  providedIn: 'root'
})
export class MyService extends EngineApp3dThreeTemplateService {

    private axesHelper: THREE.AxesHelper;
    
    //implement for create objects in scene
    createObjects() {
        this.axesHelper = new THREE.AxesHelper( 200 );
        this.scene.add( this.axesHelper );
    
        this.camera.lookAt(0,0,0);
    }

    //implement for render animation of objects
    renderObjects() {

    }

}