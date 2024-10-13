import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveListen]',
  standalone: true
})
export class DirectiveListenDirective implements OnDestroy{

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { 
    
  }

  listener!: any

  @HostListener('click')
  onMouseEnter(): void{
    const div = this.renderer2.createElement('div')
    const text = this.renderer2.createText('sdssfdsdf g')

    this.listener = this.renderer2.listen(div, 'mouseenter', () => console.log('hello'))

    this.renderer2.appendChild(div, text)
    this.renderer2.appendChild(this.elementRef.nativeElement, div)
  }


  ngOnDestroy(): void {
    this.listener.unsubscribe()
  }


}
