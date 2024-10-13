import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

interface IObj{
  [key: string]: boolean,
}

@Directive({
  selector: '[appSuctomNgClass]',
  standalone: true
})
export class SuctomNgClassDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  @Input("appSuctomNgClass")
  set changeClass(classes: IObj){

    for(let item of Object.entries(classes)){
      const [key, value] = item

      if(value){
        this.renderer2.addClass(this.element.nativeElement, key)
      }
      else{
        this.renderer2.removeClass(this.element.nativeElement, key)
      }
    }
  }

}
