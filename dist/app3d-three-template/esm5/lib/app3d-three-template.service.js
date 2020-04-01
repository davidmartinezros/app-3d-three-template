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
            this.renderService.createObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
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
            this.renderService.renderObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
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
    /** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwcDNkLXRocmVlLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcDNkLXRocmVlLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFakQ7SUFhRSx5Q0FDVSxNQUFjLEVBQ2QsYUFBNEI7UUFENUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSjlCLFlBQU8sR0FBVyxJQUFJLENBQUM7SUFJVSxDQUFDOzs7O0lBRW5DLHFEQUFXOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRUQscURBQVc7Ozs7SUFBWCxVQUFZLE1BQXFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxD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LGFBQWE7OzswQ0FGdEI7Q0FtR0MsQUEvRkQsSUErRkM7U0E1RlksK0JBQStCOzs7Ozs7SUFFMUMsaURBQWtDOzs7OztJQUNsQyxtREFBc0M7Ozs7O0lBQ3RDLGlEQUF3Qzs7Ozs7SUFDeEMsZ0RBQTJCOzs7OztJQUMzQixnREFBa0M7Ozs7O0lBRWxDLGtEQUErQjs7Ozs7SUFHN0IsaURBQXNCOzs7OztJQUN0Qix3REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tICcuL3JlbmRlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmVBcHAzZFRocmVlVGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhO1xyXG4gIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xyXG4gIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodDtcclxuXHJcbiAgcHJpdmF0ZSBmcmFtZUlkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJTZXJ2aWNlOiBSZW5kZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5mcmFtZUlkICE9IG51bGwpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVNjZW5lKGNhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD4pOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1NS4wLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC41LCAzMDAwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgyMDAsIDIwMCwgMjAwKTtcclxuICAgIFxyXG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4NDA0MDQwICk7XHJcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAxMDtcclxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlT2JqZWN0cygpIHtcclxuICAgIGlmKHRoaXMucmVuZGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLnJlbmRlclNlcnZpY2UuY3JlYXRlT2JqZWN0cyh0aGlzLnNjZW5lLCB0aGlzLnJlbmRlcmVyLCB0aGlzLmNhbnZhcywgdGhpcy5jYW1lcmEsIHRoaXMubGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZW5kZXJPYmplY3RzKCkge1xyXG4gICAgaWYodGhpcy5yZW5kZXJTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyU2VydmljZS5yZW5kZXJPYmplY3RzKHRoaXMuc2NlbmUsIHRoaXMucmVuZGVyZXIsIHRoaXMuY2FudmFzLCB0aGlzLmNhbWVyYSwgdGhpcy5saWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJPYmplY3RzKCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19