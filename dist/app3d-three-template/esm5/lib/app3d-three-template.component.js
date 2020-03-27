/**
 * @fileoverview added by tsickle
 * Generated from: lib/app3d-three-template.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { EngineApp3dThreeTemplateService } from './app3d-three-template.service';
var App3dThreeTemplateComponent = /** @class */ (function () {
    function App3dThreeTemplateComponent(engServ) {
        this.engServ = engServ;
    }
    /**
     * @return {?}
     */
    App3dThreeTemplateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    };
    App3dThreeTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app3d-three-template',
                    template: "\n    <div class=\"engine-wrapper\">\n      <canvas #rendererCanvas id=\"renderCanvas\"></canvas>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".engine-wrapper{background-color:#222929;position:absolute;top:0;right:0;bottom:0;left:0;z-index:0}.engine-wrapper #renderCanvas{background-color:#222929;height:100%;width:100%;touch-action:none}.engine-wrapper #renderCanvas:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    App3dThreeTemplateComponent.ctorParameters = function () { return [
        { type: EngineApp3dThreeTemplateService }
    ]; };
    App3dThreeTemplateComponent.propDecorators = {
        rendererCanvas: [{ type: ViewChild, args: ['rendererCanvas', { static: true },] }]
    };
    return App3dThreeTemplateComponent;
}());
export { App3dThreeTemplateComponent };
if (false) {
    /** @type {?} */
    App3dThreeTemplateComponent.prototype.rendererCanvas;
    /**
     * @type {?}
     * @private
     */
    App3dThreeTemplateComponent.prototype.engServ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwM2QtdGhyZWUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwM2QtdGhyZWUtdGVtcGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXBwM2QtdGhyZWUtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWpGO0lBZUUscUNBQW9CLE9BQXdDO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO0lBQUksQ0FBQzs7OztJQUVqRSw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxtSEFJVDtvQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVhRLCtCQUErQjs7O2lDQWNyQyxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQVUvQyxrQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBWlksMkJBQTJCOzs7SUFFdEMscURBQ3FEOzs7OztJQUV6Qyw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbmdpbmVBcHAzZFRocmVlVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hcHAzZC10aHJlZS10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwM2QtdGhyZWUtdGVtcGxhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZW5naW5lLXdyYXBwZXJcIj5cclxuICAgICAgPGNhbnZhcyAjcmVuZGVyZXJDYW52YXMgaWQ9XCJyZW5kZXJDYW52YXNcIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwM2QtdGhyZWUtdGVtcGxhdGUuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcDNkVGhyZWVUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlcmVyQ2FudmFzJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBwdWJsaWMgcmVuZGVyZXJDYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuZ1NlcnY6IEVuZ2luZUFwcDNkVGhyZWVUZW1wbGF0ZVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZW5nU2Vydi5jcmVhdGVTY2VuZSh0aGlzLnJlbmRlcmVyQ2FudmFzKTtcclxuICAgIHRoaXMuZW5nU2Vydi5hbmltYXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=