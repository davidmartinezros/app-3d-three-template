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
var RenderService = /** @class */ (function () {
    function RenderService() {
    }
    RenderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ RenderService.ngInjectableDef = i0.defineInjectable({ factory: function RenderService_Factory() { return new RenderService(); }, token: RenderService, providedIn: "root" });
    return RenderService;
}());
export { RenderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAzZC10aHJlZS10ZW1wbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9yZW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDO0lBQUE7S0FzQkM7O2dCQXRCQSxVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7d0JBSkQ7Q0F3QkMsQUF0QkQsSUFzQkM7U0FuQnFCLGFBQWE7Ozs7Ozs7Ozs7SUFFakMsc0ZBQXNJOzs7Ozs7Ozs7SUFTdEksc0ZBQXNJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJTZXJ2aWNlIHtcclxuICAvL2ltcGxlbWVudCBmb3IgY3JlYXRlIG9iamVjdHMgaW4gc2NlbmVcclxuICBhYnN0cmFjdCBjcmVhdGVPYmplY3RzKHNjZW5lOiBUSFJFRS5TY2VuZSwgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQpO1xyXG4gIC8ve1xyXG4gIC8vdGhpcy5heGVzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoIDIwMCApO1xyXG4gIC8vdGhpcy5zY2VuZS5hZGQoIHRoaXMuYXhlc0hlbHBlciApO1xyXG5cclxuICAvL3RoaXMuY2FtZXJhLmxvb2tBdCgwLDAsMCk7XHJcbiAgLy99XHJcblxyXG4gIC8vaW1wbGVtZW50IGZvciByZW5kZXIgYW5pbWF0aW9uIG9mIG9iamVjdHNcclxuICBhYnN0cmFjdCByZW5kZXJPYmplY3RzKHNjZW5lOiBUSFJFRS5TY2VuZSwgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXIsIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEsIGxpZ2h0OiBUSFJFRS5BbWJpZW50TGlnaHQpO1xyXG4gIC8ve1xyXG4gIC8vdGhpcy5heGVzSGVscGVyLnJvdGF0ZVgoMC4wMSk7XHJcbiAgLy90aGlzLmF4ZXNIZWxwZXIucm90YXRlWSgwLjAwMSk7XHJcbiAgLy90aGlzLmF4ZXNIZWxwZXIucm90YXRlWigwLjAwNSk7XHJcblxyXG4gIC8vdGhpcy5jYW1lcmEubG9va0F0KHRoaXMuYXhlc0hlbHBlci5wb3NpdGlvbik7XHJcbiAgLy99XHJcbn0iXX0=