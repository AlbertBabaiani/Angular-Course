import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { ICustomStyles } from '../Interfaces/ICustomStyles.interface';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @Input("appCustom") set customStyles(styles: ICustomStyles){

    Object.entries(styles).forEach( (style) =>{

      const [key, value] = style
      
      this.renderer2.setStyle(this.elementRef.nativeElement, key, value)

    } )
  }

}

