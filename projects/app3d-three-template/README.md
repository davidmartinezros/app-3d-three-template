## use three.js in an easy way with app3d-three-template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is designed as a basic template for [ThreeJS](https://threejs.org/) combined with [Angular](https://angular.io/).

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

## demo plunker using the component

https://next.plnkr.co/edit/B1IDXBOaY8OvFYQI?preview

## how to create a three.js project

You have to import the three.js types needed into your project.

```
npm i three --save (is optional, only if you want a different version)
npm i @types/webgl2 --save
npm i @types/offscreencanvas --save
```

Add the three.js file to your project in the angular.json file, which is loaded by the component as a peerDependency.

```
"scripts": [
  "node_modules/three/build/three.min.js"
],
```

Add webgl2 and offscreencanvas as types in your tsconfig.app.json file or tsconfig.json file, for recognize them.

```
"compilerOptions": {
  "types": [
    "webgl2"
    "offscreencanvas"
  ]
},
```

# how to use this component

You can use it as a component in your project adding the <app3d-three-template></app3d-three-template> tag in your AppComponent, add the module App3dThreeTemplateModule and define your provider MyRenderService extending the abstract service RenderService.

Like this:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App3dThreeTemplateModule, RenderService } from 'app3d-three-template';
import { AppComponent } from './app.component';
import { MyRenderService } from './my-service';

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
import { RenderService } from 'app3d-three-template';

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

Call the component into the html of the AppComponent:

```
<app3d-three-template></app3d-three-template>
```

## Demo Example

This intro is done with this three.js and the component app3d-three-template.

https://davidmartinezros.com