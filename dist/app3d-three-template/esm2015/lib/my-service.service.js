/**
 * @fileoverview added by tsickle
 * Generated from: lib/my-service.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as THREE from 'three';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MyRenderService {
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    createObjects(scene, renderer, canvas, camera, light) {
        this.axesHelper = new THREE.AxesHelper(200);
        scene.add(this.axesHelper);
        camera.lookAt(0, 0, 0);
    }
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    renderObjects(scene, renderer, canvas, camera, light) {
        this.axesHelper.rotateX(0.01);
    }
}
MyRenderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ MyRenderService.ngInjectableDef = i0.defineInjectable({ factory: function MyRenderService_Factory() { return new MyRenderService(); }, token: MyRenderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyRenderService.prototype.axesHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwM2QtdGhyZWUtdGVtcGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXktc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7Ozs7SUFLeEIsYUFBYSxDQUFDLEtBQWtCLEVBQUUsUUFBNkIsRUFBRSxNQUF5QixFQUFFLE1BQStCLEVBQUUsS0FBeUI7UUFDbEosSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDOUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7UUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7Ozs7SUFHRCxhQUFhLENBQUMsS0FBa0IsRUFBRSxRQUE2QixFQUFFLE1BQXlCLEVBQUUsTUFBK0IsRUFBRSxLQUF5QjtRQUNwSixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFsQkosVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUdHLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZW5kZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeVJlbmRlclNlcnZpY2UgaW1wbGVtZW50cyBSZW5kZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGF4ZXNIZWxwZXI6IFRIUkVFLkF4ZXNIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vaW1wbGVtZW50IGZvciBjcmVhdGUgb2JqZWN0cyBpbiBzY2VuZVxyXG4gICAgY3JlYXRlT2JqZWN0cyhzY2VuZTogVEhSRUUuU2NlbmUsIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLCBsaWdodDogVEhSRUUuQW1iaWVudExpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5heGVzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoIDIwMCApO1xyXG4gICAgICAgIHNjZW5lLmFkZCggdGhpcy5heGVzSGVscGVyICk7XHJcbiAgICBcclxuICAgICAgICBjYW1lcmEubG9va0F0KDAsMCwwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ltcGxlbWVudCBmb3IgcmVuZGVyIGFuaW1hdGlvbiBvZiBvYmplY3RzXHJcbiAgICByZW5kZXJPYmplY3RzKHNjZW5lOiBUSFJFRS5TY2VuZSwgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQpIHtcclxuICAgICAgdGhpcy5heGVzSGVscGVyLnJvdGF0ZVgoMC4wMSk7XHJcbiAgICB9XHJcblxyXG59Il19