# app-3d-three-template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is designed as a basic template for [ThreeJS](https://threejs.org/) combined with [Angular](https://angular.io/).

The project is setup to use global [SCSS](https://sass-lang.com/) only and [ViewEncapsulation.None](https://angular.io/api/core/ViewEncapsulation).

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

# how to use

You can use it as a component in your project adding the <app-3d-three-template></app-3d-three-template> tag where you want and add the component App3dThreeTemplateComponent and the provider EngineApp3dThreeTemplateService to the module.

Like this:

```
@NgModule({
  declarations: [
    App3dThreeTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EngineApp3dThreeTemplateService
  ],
  bootstrap: [
    App3dThreeTemplateComponent
  ]
})
export class AppModule { }
´´´

Then, you can reimplemented extending the service EngineApp3dThreeTemplateService and implementing the methods createObjects() and renderObjects().

Like this:

```
export class YourService extends EngineApp3dThreeTemplateService {

...

//implement for create objects in scene
  createObjects(): void {
    this.axesHelper = new THREE.AxesHelper( 200 );
    this.scene.add( this.axesHelper );
  }

  //implement for render animation of objects
  renderObjects() {
    //this.axesHelper.rotateX(0.01);
    //this.axesHelper.rotateY(0.001);
    //this.axesHelper.rotateZ(0.005);

    //this.camera.lookAt(this.axesHelper.position);
  }

...

}
´´´

## Three Links

* Three Extensions: https://github.com/Itee/three-full
* Three-Full Types: https://discourse.threejs.org/t/angular-threejs/2739/7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
