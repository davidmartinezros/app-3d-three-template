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
        this.axesHelper = new THREE.AxesHelper(200);
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
    /** @nocollapse */ MyRenderService.ngInjectableDef = i0.defineInjectable({ factory: function MyRenderService_Factory() { return new MyRenderService(); }, token: MyRenderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwM2QtdGhyZWUtdGVtcGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXktc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFBQTtLQW9CQztJQWJHLHVDQUF1Qzs7Ozs7Ozs7O0lBQ3ZDLHVDQUFhOzs7Ozs7Ozs7SUFBYixVQUFjLEtBQWtCLEVBQUUsUUFBNkIsRUFBRSxNQUErQixFQUFFLEtBQXlCO1FBQ3ZILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQTJDOzs7Ozs7Ozs7SUFDM0MsdUNBQWE7Ozs7Ozs7OztJQUFiLFVBQWMsS0FBa0IsRUFBRSxRQUE2QixFQUFFLE1BQStCLEVBQUUsS0FBeUI7UUFDekgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBbEJKLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzswQkFORDtDQXdCQyxBQXBCRCxJQW9CQztTQWpCWSxlQUFlOzs7Ozs7SUFFeEIscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tICcuL3JlbmRlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE15UmVuZGVyU2VydmljZSBpbXBsZW1lbnRzIFJlbmRlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYXhlc0hlbHBlcjogVEhSRUUuQXhlc0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy9pbXBsZW1lbnQgZm9yIGNyZWF0ZSBvYmplY3RzIGluIHNjZW5lXHJcbiAgICBjcmVhdGVPYmplY3RzKHNjZW5lOiBUSFJFRS5TY2VuZSwgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQpIHtcclxuICAgICAgICB0aGlzLmF4ZXNIZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlciggMjAwICk7XHJcbiAgICAgICAgc2NlbmUuYWRkKCB0aGlzLmF4ZXNIZWxwZXIgKTtcclxuICAgIFxyXG4gICAgICAgIGNhbWVyYS5sb29rQXQoMCwwLDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW1wbGVtZW50IGZvciByZW5kZXIgYW5pbWF0aW9uIG9mIG9iamVjdHNcclxuICAgIHJlbmRlck9iamVjdHMoc2NlbmU6IFRIUkVFLlNjZW5lLCByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSwgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodCkge1xyXG4gICAgICB0aGlzLmF4ZXNIZWxwZXIucm90YXRlWCgwLjAxKTtcclxuICAgIH1cclxuXHJcbn0iXX0=