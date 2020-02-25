import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class RenderService {
  //implement for create objects in scene
  abstract createObjects(scene: THREE.Scene, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight);
  //{
  //this.axesHelper = new THREE.AxesHelper( 200 );
  //this.scene.add( this.axesHelper );

  //this.camera.lookAt(0,0,0);
  //}

  //implement for render animation of objects
  abstract renderObjects(scene: THREE.Scene, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight);
  //{
  //this.axesHelper.rotateX(0.01);
  //this.axesHelper.rotateY(0.001);
  //this.axesHelper.rotateZ(0.005);

  //this.camera.lookAt(this.axesHelper.position);
  //}
}