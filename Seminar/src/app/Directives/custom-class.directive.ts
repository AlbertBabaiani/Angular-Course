import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { ICustomClass } from '../Interfaces/ICustomClass.interface';

@Directive({
  selector: '[appCustomClass]',
  standalone: true
})
export class CustomClassDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @Input("appCustomClass") set customClasses(classes: ICustomClass){

    Object.entries(classes).forEach( (style) =>{

      const [key, value] = style
      
      if(value){
        this.renderer2.addClass(this.elementRef.nativeElement, key)
      }

    } )
  }

}
