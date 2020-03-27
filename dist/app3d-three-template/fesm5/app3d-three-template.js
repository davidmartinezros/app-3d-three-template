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
var RenderService = /** @class */ (function () {
    function RenderService() {
    }
    RenderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ RenderService.ngInjectableDef = defineInjectable({ factory: function RenderService_Factory() { return new RenderService(); }, token: RenderService, providedIn: "root" });
    return RenderService;
}());
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
var EngineApp3dThreeTemplateService = /** @class */ (function () {
    function EngineApp3dThreeTemplateService(ngZone, renderService) {
        this.ngZone = ngZone;
        this.renderService = renderService;
        this.frameId = null;
    }
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.createScene = /**
     * @param {?} canvas
     * @return {?}
     */
    function (canvas) {
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
    };
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.createObjects = /**
     * @return {?}
     */
    function () {
        if (this.renderService) {
            this.renderService.createObjects(this.scene, this.renderer, this.camera, this.light);
        }
    };
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.renderObjects = /**
     * @return {?}
     */
    function () {
        if (this.renderService) {
            this.renderService.renderObjects(this.scene, this.renderer, this.camera, this.light);
        }
    };
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.render = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.frameId = requestAnimationFrame((/**
         * @return {?}
         */
        function () {
            _this.render();
        }));
        this.renderObjects();
        this.renderer.render(this.scene, this.camera);
    };
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.animate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (document.readyState !== 'loading') {
                _this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', (/**
                 * @return {?}
                 */
                function () {
                    _this.render();
                }));
            }
            window.addEventListener('resize', (/**
             * @return {?}
             */
            function () {
                _this.resize();
            }));
        }));
    };
    /**
     * @return {?}
     */
    EngineApp3dThreeTemplateService.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = window.innerWidth;
        /** @type {?} */
        var height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    };
    EngineApp3dThreeTemplateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    EngineApp3dThreeTemplateService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RenderService }
    ]; };
    /** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = defineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(inject(NgZone), inject(RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
    return EngineApp3dThreeTemplateService;
}());
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
var App3dThreeTemplateComponent = /** @class */ (function () {
    function App3dThreeTemplateComponent(engServ) {
        this.engServ = engServ;
    }
    /**
     * @return {?}
     */
    App3dThreeTemplateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    };
    App3dThreeTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app3d-three-template',
                    template: "\n    <div class=\"engine-wrapper\">\n      <canvas #rendererCanvas id=\"renderCanvas\"></canvas>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".engine-wrapper{background-color:#222929;position:absolute;top:0;right:0;bottom:0;left:0;z-index:0}.engine-wrapper #renderCanvas{background-color:#222929;height:100%;width:100%;touch-action:none}.engine-wrapper #renderCanvas:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    App3dThreeTemplateComponent.ctorParameters = function () { return [
        { type: EngineApp3dThreeTemplateService }
    ]; };
    App3dThreeTemplateComponent.propDecorators = {
        rendererCanvas: [{ type: ViewChild, args: ['rendererCanvas', { static: true },] }]
    };
    return App3dThreeTemplateComponent;
}());
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
var MyRenderService = /** @class */ (function () {
    function MyRenderService() {
    }
    //implement for create objects in scene
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    MyRenderService.prototype.createObjects = 
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    function (scene, renderer, camera, light) {
        this.axesHelper = new AxesHelper(200);
        scene.add(this.axesHelper);
        camera.lookAt(0, 0, 0);
    };
    //implement for render animation of objects
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    MyRenderService.prototype.renderObjects = 
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    function (scene, renderer, camera, light) {
        this.axesHelper.rotateX(0.01);
    };
    MyRenderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MyRenderService.ngInjectableDef = defineInjectable({ factory: function MyRenderService_Factory() { return new MyRenderService(); }, token: MyRenderService, providedIn: "root" });
    return MyRenderService;
}());
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
var App3dThreeTemplateModule = /** @class */ (function () {
    function App3dThreeTemplateModule() {
    }
    App3dThreeTemplateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [App3dThreeTemplateComponent],
                    imports: [CommonModule],
                    providers: [{ provide: RenderService, useClass: MyRenderService }],
                    exports: [App3dThreeTemplateComponent]
                },] }
    ];
    return App3dThreeTemplateModule;
}());

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
