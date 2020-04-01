/**
 * @fileoverview added by tsickle
 * Generated from: lib/my-service.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as THREE from 'three';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MyRenderService = /** @class */ (function () {
    function MyRenderService() {
    }
    //implement for create objects in scene
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    MyRenderService.prototype.createObjects = 
    //implement for create objects in scene
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    function (scene, renderer, canvas, camera, light) {
        this.axesHelper = new THREE.AxesHelper(200);
        scene.add(this.axesHelper);
        camera.lookAt(0, 0, 0);
    };
    //implement for render animation of objects
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    MyRenderService.prototype.renderObjects = 
    //implement for render animation of objects
    /**
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    function (scene, renderer, canvas, camera, light) {
        this.axesHelper.rotateX(0.01);
    };
    MyRenderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MyRenderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MyRenderService_Factory() { return new MyRenderService(); }, token: MyRenderService, providedIn: "root" });
    return MyRenderService;
}());
export { MyRenderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyRenderService.prototype.axesHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwM2QtdGhyZWUtdGVtcGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXktc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFBQTtLQW9CQztJQWJHLHVDQUF1Qzs7Ozs7Ozs7OztJQUN2Qyx1Q0FBYTs7Ozs7Ozs7OztJQUFiLFVBQWMsS0FBa0IsRUFBRSxRQUE2QixFQUFFLE1BQXlCLEVBQUUsTUFBK0IsRUFBRSxLQUF5QjtRQUNsSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUM5QyxLQUFLLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztRQUU3QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDJDQUEyQzs7Ozs7Ozs7OztJQUMzQyx1Q0FBYTs7Ozs7Ozs7OztJQUFiLFVBQWMsS0FBa0IsRUFBRSxRQUE2QixFQUFFLE1BQXlCLEVBQUUsTUFBK0IsRUFBRSxLQUF5QjtRQUNwSixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFsQkosVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzBCQU5EO0NBd0JDLEFBcEJELElBb0JDO1NBakJZLGVBQWU7Ozs7OztJQUV4QixxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyU2VydmljZSB9IGZyb20gJy4vcmVuZGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlSZW5kZXJTZXJ2aWNlIGltcGxlbWVudHMgUmVuZGVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBheGVzSGVscGVyOiBUSFJFRS5BeGVzSGVscGVyO1xyXG4gICAgXHJcbiAgICAvL2ltcGxlbWVudCBmb3IgY3JlYXRlIG9iamVjdHMgaW4gc2NlbmVcclxuICAgIGNyZWF0ZU9iamVjdHMoc2NlbmU6IFRIUkVFLlNjZW5lLCByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSwgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodCkge1xyXG4gICAgICAgIHRoaXMuYXhlc0hlbHBlciA9IG5ldyBUSFJFRS5BeGVzSGVscGVyKCAyMDAgKTtcclxuICAgICAgICBzY2VuZS5hZGQoIHRoaXMuYXhlc0hlbHBlciApO1xyXG4gICAgXHJcbiAgICAgICAgY2FtZXJhLmxvb2tBdCgwLDAsMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbXBsZW1lbnQgZm9yIHJlbmRlciBhbmltYXRpb24gb2Ygb2JqZWN0c1xyXG4gICAgcmVuZGVyT2JqZWN0cyhzY2VuZTogVEhSRUUuU2NlbmUsIHJlbmRlcmVyOiBUSFJFRS5XZWJHTFJlbmRlcmVyLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhLCBsaWdodDogVEhSRUUuQW1iaWVudExpZ2h0KSB7XHJcbiAgICAgIHRoaXMuYXhlc0hlbHBlci5yb3RhdGVYKDAuMDEpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==