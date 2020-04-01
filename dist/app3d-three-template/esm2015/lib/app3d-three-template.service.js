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
            this.renderService.createObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
        }
    }
    /**
     * @return {?}
     */
    renderObjects() {
        if (this.renderService) {
            this.renderService.renderObjects(this.scene, this.renderer, this.canvas, this.camera, this.light);
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
/** @nocollapse */ EngineApp3dThreeTemplateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EngineApp3dThreeTemplateService_Factory() { return new EngineApp3dThreeTemplateService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.RenderService)); }, token: EngineApp3dThreeTemplateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FwcDNkLXRocmVlLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcDNkLXRocmVlLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUFVMUMsWUFDVSxNQUFjLEVBQ2QsYUFBNEI7UUFENUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSjlCLFlBQU8sR0FBVyxJQUFJLENBQUM7SUFJVSxDQUFDOzs7O0lBRW5DLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFxQztRQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVB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QUFrQzs7Ozs7SUFDbEMsbURBQXNDOzs7OztJQUN0QyxpREFBd0M7Ozs7O0lBQ3hDLGdEQUEyQjs7Ozs7SUFDM0IsZ0RBQWtDOzs7OztJQUVsQyxrREFBK0I7Ozs7O0lBRzdCLGlEQUFzQjs7Ozs7SUFDdEIsd0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZW5kZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW5naW5lQXBwM2RUaHJlZVRlbXBsYXRlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYTtcclxuICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcclxuICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQ7XHJcblxyXG4gIHByaXZhdGUgZnJhbWVJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyU2VydmljZTogUmVuZGVyU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZnJhbWVJZCAhPSBudWxsKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY2VuZShjYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXMubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNTUuMCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuNSwgMzAwMDAwMCk7XHJcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMjAwLCAyMDAsIDIwMCk7XHJcbiAgICBcclxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweDQwNDA0MCApO1xyXG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU9iamVjdHMoKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZU9iamVjdHMoKSB7XHJcbiAgICBpZih0aGlzLnJlbmRlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5yZW5kZXJTZXJ2aWNlLmNyZWF0ZU9iamVjdHModGhpcy5zY2VuZSwgdGhpcy5yZW5kZXJlciwgdGhpcy5jYW52YXMsIHRoaXMuY2FtZXJhLCB0aGlzLmxpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyT2JqZWN0cygpIHtcclxuICAgIGlmKHRoaXMucmVuZGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLnJlbmRlclNlcnZpY2UucmVuZGVyT2JqZWN0cyh0aGlzLnNjZW5lLCB0aGlzLnJlbmRlcmVyLCB0aGlzLmNhbnZhcywgdGhpcy5jYW1lcmEsIHRoaXMubGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyT2JqZWN0cygpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==