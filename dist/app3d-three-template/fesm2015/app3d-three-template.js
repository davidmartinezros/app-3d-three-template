import { WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, AxesHelper } from 'three';
import { Injectable, defineInjectable, NgZone, inject, Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/render.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class RenderService {
}
RenderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ RenderService.ngInjectableDef = defineInjectable({ factory: function RenderService_Factory() { return new RenderService(); }, token: RenderService, providedIn: "root" });
if (false) {
    /**
     * @abstract
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    RenderService.prototype.createObjects = function (scene, renderer, camera, light) { };
    /**
     * @abstract
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    RenderService.prototype.renderObjects = function (scene, renderer, camera, light) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EngineApp3dThreeTemplateService {
    /**
     * @param {?} ngZone
     * @param {?} renderService
     */
    constructor(ngZone, renderService) {
        this.ngZone = ngZone;
        this.renderService = renderService;
        this.frameId = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    /**
     * @param {?} canvas
     * @return {?}
     */
    createScene(canvas) {
        this.canvas = canvas.nativeElement;
        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(55.0, window.innerWidth / window.innerHeight, 0.5, 3000000);
        this.camera.position.set(200, 200, 200);
        this.light = new AmbientLight(0x404040);
        this.light.position.z = 10;
        this.scene.add(this.light);
        this.createObjects();
    }
    /**
     * @return {?}
     */
    createObjects() {
        if (this.renderService) {
            this.renderService.createObjects(this.scene, this.renderer, this.camera, this.light);
        }
    }
    /**
     * @return {?}
     */
    renderObjects() {
        if (this.renderService) {
            this.renderService.renderObjects(this.scene, this.renderer, this.camera, this.light);
        }
    }
    /**
     * @return {?}
     */
    render() {
        this.frameId = requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.render();
        }));
        this.renderObjects();
        this.renderer.render(this.scene, this.camera);
    }
    /**
     * @return {?}
     */
    animate() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', (/**
                 * @return {?}
                 */
                () => {
                    this.render();
                }));
            }
            window.addEventListener('resize', (/**
             * @return {?}
             */
            () => {
                this.resize();
            }));
        }));
    }
    /**
     * @return {?}
     */
    resize() {
        /** @type {?} */
        const width = window.innerWidth;
        /** @type {?} */
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
EngineApp3dThreeTemplateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
EngineApp3dThreeTemplateService.ctorParameters = () => [
    { type: NgZone },
    { type: RenderService }
];
/** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = defineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(inject(NgZone), inject(RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.canvas;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.camera;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.scene;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.light;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.frameId;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    EngineApp3dThreeTemplateService.prototype.renderService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class App3dThreeTemplateComponent {
    /**
     * @param {?} engServ
     */
    constructor(engServ) {
        this.engServ = engServ;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    }
}
App3dThreeTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app3d-three-template',
                template: `
    <div class="engine-wrapper">
      <canvas #rendererCanvas id="renderCanvas"></canvas>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".engine-wrapper{background-color:#222929;position:absolute;top:0;right:0;bottom:0;left:0;z-index:0}.engine-wrapper #renderCanvas{background-color:#222929;height:100%;width:100%;touch-action:none}.engine-wrapper #renderCanvas:focus{outline:0}"]
            }] }
];
/** @nocollapse */
App3dThreeTemplateComponent.ctorParameters = () => [
    { type: EngineApp3dThreeTemplateService }
];
App3dThreeTemplateComponent.propDecorators = {
    rendererCanvas: [{ type: ViewChild, args: ['rendererCanvas', { static: true },] }]
};
if (false) {
    /** @type {?} */
    App3dThreeTemplateComponent.prototype.rendererCanvas;
    /**
     * @type {?}
     * @private
     */
    App3dThreeTemplateComponent.prototype.engServ;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/my-service.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyRenderService {
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    createObjects(scene, renderer, camera, light) {
        this.axesHelper = new AxesHelper(200);
        scene.add(this.axesHelper);
        camera.lookAt(0, 0, 0);
    }
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    renderObjects(scene, renderer, camera, light) {
        this.axesHelper.rotateX(0.01);
    }
}
MyRenderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ MyRenderService.ngInjectableDef = defineInjectable({ factory: function MyRenderService_Factory() { return new MyRenderService(); }, token: MyRenderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyRenderService.prototype.axesHelper;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class App3dThreeTemplateModule {
}
App3dThreeTemplateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [App3dThreeTemplateComponent],
                imports: [CommonModule],
                providers: [{ provide: RenderService, useClass: MyRenderService }],
                exports: [App3dThreeTemplateComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: app3d-three-template.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { App3dThreeTemplateComponent, App3dThreeTemplateModule, EngineApp3dThreeTemplateService, MyRenderService, RenderService };
//# sourceMappingURL=app3d-three-template.js.map
