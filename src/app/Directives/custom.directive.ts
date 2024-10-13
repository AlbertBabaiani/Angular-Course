import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private element: ElementRef) {
  }

  @Input("appCustom")
  backgroundColor: string = ''

  @HostBinding("style.background") bgValue: string = ""
  @HostBinding("style.color") colorValue: string = ""

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.bgValue = this.backgroundColor
    this.colorValue = 'white'
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.bgValue = 'white'
    this.colorValue = 'red'
  }

}
