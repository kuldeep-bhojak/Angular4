"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ColorDirective = (function () {
    function ColorDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ColorDirective.prototype.onmouseenter = function () { this.hover(true); };
    ColorDirective.prototype.onmouseleave = function () { this.hover(false); };
    ColorDirective.prototype.hover = function (isHover) {
        if (isHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "red");
            this.renderer.setElementStyle(this.elementRef.nativeElement, "cursor", "pointer");
        }
        else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "black");
            this.renderer.setElementStyle(this.elementRef.nativeElement, "cursor", "default");
        }
    };
    return ColorDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorDirective.prototype, "onmouseenter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorDirective.prototype, "onmouseleave", null);
ColorDirective = __decorate([
    core_1.Directive({
        selector: '[myColor]'
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], ColorDirective);
exports.ColorDirective = ColorDirective;
//# sourceMappingURL=color.directive.js.map