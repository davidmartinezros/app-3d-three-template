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
export class EngineApp3dThreeTemplateService {
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
/** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = i0.defineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(i0.inject(i0.NgZone), i0.inject(i1.RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwcDNkLXRocmVlLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcDNkLXRocmVlLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFVMUMsWUFDVSxNQUFjLEVBQ2QsYUFBNEI7UUFENUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSjlCLFlBQU8sR0FBVyxJQUFJLENBQUM7SUFJVSxDQUFDOzs7O0lBRW5DLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFxQztRQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVB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Ozs7SUFDeEMsZ0RBQTJCOzs7OztJQUMzQixnREFBa0M7Ozs7O0lBRWxDLGtEQUErQjs7Ozs7SUFHN0IsaURBQXNCOzs7OztJQUN0Qix3REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tICcuL3JlbmRlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmVBcHAzZFRocmVlVGVtcGxhdGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhO1xyXG4gIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xyXG4gIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodDtcclxuXHJcbiAgcHJpdmF0ZSBmcmFtZUlkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJTZXJ2aWNlOiBSZW5kZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5mcmFtZUlkICE9IG51bGwpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVNjZW5lKGNhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD4pOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1NS4wLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC41LCAzMDAwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgyMDAsIDIwMCwgMjAwKTtcclxuICAgIFxyXG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4NDA0MDQwICk7XHJcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAxMDtcclxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlT2JqZWN0cygpIHtcclxuICAgIGlmKHRoaXMucmVuZGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLnJlbmRlclNlcnZpY2UuY3JlYXRlT2JqZWN0cyh0aGlzLnNjZW5lLCB0aGlzLnJlbmRlcmVyLCB0aGlzLmNhbWVyYSwgdGhpcy5saWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlck9iamVjdHMoKSB7XHJcbiAgICBpZih0aGlzLnJlbmRlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5yZW5kZXJTZXJ2aWNlLnJlbmRlck9iamVjdHModGhpcy5zY2VuZSwgdGhpcy5yZW5kZXJlciwgdGhpcy5jYW1lcmEsIHRoaXMubGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyT2JqZWN0cygpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==