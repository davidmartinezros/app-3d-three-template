/**
 * @fileoverview added by tsickle
 * Generated from: lib/render.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @abstract
 */
export class RenderService {
}
RenderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ RenderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RenderService_Factory() { return new RenderService(); }, token: RenderService, providedIn: "root" });
if (false) {
    /**
     * @abstract
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    RenderService.prototype.createObjects = function (scene, renderer, canvas, camera, light) { };
    /**
     * @abstract
     * @param {?} scene
     * @param {?} renderer
     * @param {?} canvas
     * @param {?} camera
     * @param {?} light
     * @return {?}
     */
    RenderService.prototype.renderObjects = function (scene, renderer, canvas, camera, light) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAzZC10aHJlZS10ZW1wbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSzNDLE1BQU0sT0FBZ0IsYUFBYTs7O1lBSGxDLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7Ozs7Ozs7OztJQUdDLDhGQUFpSzs7Ozs7Ozs7OztJQVNqSyw4RkFBaUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlclNlcnZpY2Uge1xyXG4gIC8vaW1wbGVtZW50IGZvciBjcmVhdGUgb2JqZWN0cyBpbiBzY2VuZVxyXG4gIGFic3RyYWN0IGNyZWF0ZU9iamVjdHMoc2NlbmU6IFRIUkVFLlNjZW5lLCByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSwgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodCk7XHJcbiAgLy97XHJcbiAgLy90aGlzLmF4ZXNIZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlciggMjAwICk7XHJcbiAgLy90aGlzLnNjZW5lLmFkZCggdGhpcy5heGVzSGVscGVyICk7XHJcblxyXG4gIC8vdGhpcy5jYW1lcmEubG9va0F0KDAsMCwwKTtcclxuICAvL31cclxuXHJcbiAgLy9pbXBsZW1lbnQgZm9yIHJlbmRlciBhbmltYXRpb24gb2Ygb2JqZWN0c1xyXG4gIGFic3RyYWN0IHJlbmRlck9iamVjdHMoc2NlbmU6IFRIUkVFLlNjZW5lLCByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSwgbGlnaHQ6IFRIUkVFLkFtYmllbnRMaWdodCk7XHJcbiAgLy97XHJcbiAgLy90aGlzLmF4ZXNIZWxwZXIucm90YXRlWCgwLjAxKTtcclxuICAvL3RoaXMuYXhlc0hlbHBlci5yb3RhdGVZKDAuMDAxKTtcclxuICAvL3RoaXMuYXhlc0hlbHBlci5yb3RhdGVaKDAuMDA1KTtcclxuXHJcbiAgLy90aGlzLmNhbWVyYS5sb29rQXQodGhpcy5heGVzSGVscGVyLnBvc2l0aW9uKTtcclxuICAvL31cclxufSJdfQ==