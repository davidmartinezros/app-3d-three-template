# app-3d-three-template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is designed as a basic template for [ThreeJS](https://threejs.org/) combined with [Angular](https://angular.io/).

The project is setup to use global [SCSS](https://sass-lang.com/) only and [ViewEncapsulation.None](https://angular.io/api/core/ViewEncapsulation).

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

## how to do to create a three.js project

You have to import the three.js library to your project.

```
npm i three --save
```

Add the three.js file to your project in the angular.json file.

```
"scripts": [
  "node_modules/three/build/three.min.js"
],
```

And add the webgl2 type to your tsconfig.app.json file or to tsconfig.json file.

```
"compilerOptions": {
  "outDir": "../out-tsc/app",
  "types": [
    "node",
    "webgl2"
  ]
},
```

# how to use

You can use it as a component in your project adding the <app-3d-three-template></app-3d-three-template> tag where you want and add the component App3dThreeTemplateComponent and the provider EngineApp3dThreeTemplateService to the module.

Like this:

```
@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [
    MyComponent
  ]
})
export class AppModule { }
```

Then, you can reimplemented extending the service EngineApp3dThreeTemplateService and implementing the methods createObjects() and renderObjects().

Like this:

```
export class MyService extends EngineApp3dThreeTemplateService {

  ...

  private axesHelper: THREE.AxesHelper;

  //implement for create objects in scene
  createObjects(): void {
    this.axesHelper = new THREE.AxesHelper( 200 );
    this.scene.add( this.axesHelper );
    this.camera.lookAt(0,0,0);
  }

  //implement for render animation of objects
  renderObjects() {
    this.axesHelper.rotateX(0.01);
    this.axesHelper.rotateY(0.001);
    this.axesHelper.rotateZ(0.005);
  }

  ...

}
```

And finally, you have to inject the new created service to your component.
Like this:

```
export class MyComponent extends App3dThreeTemplateComponent {

  constructor(private engServ1: MyService) {
      super(engServ1);
  }

}
```

And the html looks like this:

```
<canvas #rendererCanvas id="renderCanvas"></canvas>
```

## Three Links

* Three Extensions: https://github.com/Itee/three-full
* Three-Full Types: https://discourse.threejs.org/t/angular-threejs/2739/7

## Demo Example

This intro is done with this three.js and angular component.

https://davidmartinezros.com