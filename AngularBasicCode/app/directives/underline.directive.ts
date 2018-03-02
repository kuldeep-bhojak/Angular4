import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[myUnderLine]'
})

export class UnderlineDirective{
    constructor(
        private rederer: Renderer,
        private el: ElementRef

    ){}
    @HostListener('mouseenter') onmouseenter(){
        this.hover(true);
    }
    @HostListener('mouseleave') onmouseleave(){
        this.hover(false);
    }
    hover(shouldUnerline: boolean){
        if(shouldUnerline){
            this.rederer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
        }else{
            this.rederer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}