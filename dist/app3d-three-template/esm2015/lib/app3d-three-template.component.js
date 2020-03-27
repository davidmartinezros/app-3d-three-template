/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';
export class App3dThreeTemplateComponent {
    /**
     * @param {?} engServ
     */
    constructor(engServ) {
        this.engServ = engServ;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    }
}
App3dThreeTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app3d-three-template',
                template: `
    <div class="engine-wrapper">
      <canvas #rendererCanvas id="renderCanvas"></canvas>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".engine-wrapper{background-color:#222929;position:absolute;top:0;right:0;bottom:0;left:0;z-index:0}.engine-wrapper #renderCanvas{background-color:#222929;height:100%;width:100%;touch-action:none}.engine-wrapper #renderCanvas:focus{outline:0}"]
            }] }
];
/** @nocollapse */
App3dThreeTemplateComponent.ctorParameters = () => [
    { type: EngineApp3dThreeTemplateService }
];
App3dThreeTemplateComponent.propDecorators = {
    rendererCanvas: [{ type: ViewChild, args: ['rendererCanvas', { static: true },] }]
};
if (false) {
    /** @type {?} */
    App3dThreeTemplateComponent.prototype.rendererCanvas;
    /**
     * @type {?}
     * @private
     */
    App3dThreeTemplateComponent.prototype.engServ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwM2QtdGhyZWUtdGVtcGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXBwM2QtdGhyZWUtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWWpGLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFLdEMsWUFBb0IsT0FBd0M7UUFBeEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7SUFBSSxDQUFDOzs7O0lBRWpFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVhRLCtCQUErQjs7OzZCQWNyQyxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBQTdDLHFEQUNxRDs7Ozs7SUFFekMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW5naW5lQXBwM2RUaHJlZVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcDNkLXRocmVlLXRlbXBsYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImVuZ2luZS13cmFwcGVyXCI+XHJcbiAgICAgIDxjYW52YXMgI3JlbmRlcmVyQ2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcDNkLXRocmVlLXRlbXBsYXRlLnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAzZFRocmVlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdyZW5kZXJlckNhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgcHVibGljIHJlbmRlcmVyQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbmdTZXJ2OiBFbmdpbmVBcHAzZFRocmVlVGVtcGxhdGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmVuZ1NlcnYuY3JlYXRlU2NlbmUodGhpcy5yZW5kZXJlckNhbnZhcyk7XHJcbiAgICB0aGlzLmVuZ1NlcnYuYW5pbWF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19