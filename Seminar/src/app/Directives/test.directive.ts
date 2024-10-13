import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true
})
export class TestDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  span!: HTMLElement

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void{  

    this.span = this.renderer2.createElement('span')
    this.renderer2.setStyle(this.span, 'background', 'gray')
    this.renderer2.setStyle(this.span, 'padding', '0.5rem 1rem')
    this.renderer2.setStyle(this.span, 'border-radius', '100vmax')

    this.renderer2.setStyle(this.span, 'position', 'absolute')
    this.renderer2.setStyle(this.span, 'left', event.clientX + 'px')
    this.renderer2.setStyle(this.span, 'top', `${event.clientY}px`)

    const comment = this.renderer2.createComment('This is a comment')

    this.renderer2.appendChild(this.elementRef.nativeElement, comment)

    const parent = this.renderer2.parentNode(this.elementRef.nativeElement)
    console.log(parent)


    const dataText = this.elementRef.nativeElement.getAttribute('data-title')
    const text = this.renderer2.createText(dataText || "Default Title")

    this.renderer2.appendChild(this.span, text)

    this.renderer2.appendChild(this.elementRef.nativeElement, this.span)
  }


  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.renderer2.removeChild(this.elementRef.nativeElement, this.span)
  }

}
