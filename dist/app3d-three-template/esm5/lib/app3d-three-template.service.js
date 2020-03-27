/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as THREE from 'three';
import { Injectable, NgZone } from '@angular/core';
import { RenderService } from './render.service';
import * as i0 from "@angular/core";
import * as i1 from "./render.service";
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
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(55.0, window.innerWidth / window.innerHeight, 0.5, 3000000);
        this.camera.position.set(200, 200, 200);
        this.light = new THREE.AmbientLight(0x404040);
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
    /** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = i0.defineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(i0.inject(i0.NgZone), i0.inject(i1.RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
    return EngineApp3dThreeTemplateService;
}());
export { EngineApp3dThreeTemplateService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwcDNkLXRocmVlLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcDNkLXRocmVlLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFakQ7SUFhRSx5Q0FDVSxNQUFjLEVBQ2QsYUFBNEI7UUFENUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSjlCLFlBQU8sR0FBVyxJQUFJLENBQUM7SUFJVSxDQUFDOzs7O0lBRW5DLHFEQUFXOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRUQscURBQVc7Ozs7SUFBWCxVQUFZLE1BQXFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxD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QkFBK0I7Ozs7OztJQUUxQyxpREFBa0M7Ozs7O0lBQ2xDLG1EQUFzQzs7Ozs7SUFDdEMsaURBQXdDOzs7OztJQUN4QyxnREFBMkI7Ozs7O0lBQzNCLGdEQUFrQzs7Ozs7SUFFbEMsa0RBQStCOzs7OztJQUc3QixpREFBc0I7Ozs7O0lBQ3RCLHdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyU2VydmljZSB9IGZyb20gJy4vcmVuZGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVuZ2luZUFwcDNkVGhyZWVUZW1wbGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcjtcclxuICBwcml2YXRlIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmE7XHJcbiAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XHJcbiAgcHJpdmF0ZSBsaWdodDogVEhSRUUuQW1iaWVudExpZ2h0O1xyXG5cclxuICBwcml2YXRlIGZyYW1lSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlclNlcnZpY2U6IFJlbmRlclNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmZyYW1lSWQgIT0gbnVsbCkge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NlbmUoY2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50Pik6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgYWxwaGE6IHRydWUsXHJcbiAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDU1LjAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjUsIDMwMDAwMDApO1xyXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KDIwMCwgMjAwLCAyMDApO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCggMHg0MDQwNDAgKTtcclxuICAgIHRoaXMubGlnaHQucG9zaXRpb24ueiA9IDEwO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVPYmplY3RzKCk7XHJcblxyXG4gIH1cclxuICBcclxuICBjcmVhdGVPYmplY3RzKCkge1xyXG4gICAgaWYodGhpcy5yZW5kZXJTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyU2VydmljZS5jcmVhdGVPYmplY3RzKHRoaXMuc2NlbmUsIHRoaXMucmVuZGVyZXIsIHRoaXMuY2FtZXJhLCB0aGlzLmxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyT2JqZWN0cygpIHtcclxuICAgIGlmKHRoaXMucmVuZGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLnJlbmRlclNlcnZpY2UucmVuZGVyT2JqZWN0cyh0aGlzLnNjZW5lLCB0aGlzLnJlbmRlcmVyLCB0aGlzLmNhbWVyYSwgdGhpcy5saWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJPYmplY3RzKCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19