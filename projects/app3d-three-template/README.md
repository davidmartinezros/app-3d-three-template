## use three.js in a easy way with app3d-three-template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is designed as a basic template for [ThreeJS](https://threejs.org/) combined with [Angular](https://angular.io/).

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

## how to do to create a three.js project

You have to import the three.js library to your project.

```
npm i three --save
npm i @types/webgl2 --save
npm i @types/offscreencanvas --save
```

Add the three.js file to your project in the angular.json file.

```
"scripts": [
  "node_modules/three/build/three.min.js"
],
```

And adding webgl2 and offscreencanvas as types in your tsconfig.app.json file or tsconfig.json file.

```
"compilerOptions": {
  "outDir": "../out-tsc/app",
  "types": [
    "node",
    "webgl2"
    "offscreencanvas"
  ]
},
```

# how to use this component

You can use it as a component in your project adding the <app3d-three-template></app3d-three-template> tag where you want and add the module App3dThreeTemplateModule and defining your provider MyRenderService extending the abstract service RenderService.

Like this:

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    App3dThreeTemplateModule
  ],
  providers: [
    { provide: RenderService, useClass: MyRenderService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

Then, you can reimplement extending the abstract service RenderService and implementing the methods createObjects() and renderObjects().

Like this:

```
import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { RenderService } from './render.service';

@Injectable({
  providedIn: 'root'
})
export class MyRenderService implements RenderService {

    private axesHelper: THREE.AxesHelper;
    
    //implement for create objects in scene
    createObjects(scene: THREE.Scene, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight) {
        this.axesHelper = new THREE.AxesHelper( 200 );
        scene.add( this.axesHelper );
    
        camera.lookAt(0,0,0);
    }

    //implement for render animation of objects
    renderObjects(scene: THREE.Scene, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight) {
      this.axesHelper.rotateX(0.01);
    }

}
```

And the html of the AppComponent looks like this:

```
<app3d-three-template></app3d-three-template>
```

## Demo Example

This intro is done with this three.js and the component app3d-three-template.

https://davidmartinezros.com