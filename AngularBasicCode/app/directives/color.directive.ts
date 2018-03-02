import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[myColor]'
})
export class ColorDirective{
    constructor(
        private renderer: Renderer, private elementRef: ElementRef
    ){}
    @HostListener('mouseenter') onmouseenter() { this.hover(true)}
    @HostListener('mouseleave') onmouseleave() { this.hover(false)}
    hover(isHover: boolean){
        if(isHover){
            this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "red");
            this.renderer.setElementStyle(this.elementRef.nativeElement, "cursor", "pointer");
        }else{
            this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "black");
            this.renderer.setElementStyle(this.elementRef.nativeElement, "cursor", "default");
        }
    }
}