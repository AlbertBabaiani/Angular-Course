import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) { }


  @Output()
  closeTabEmitter: EventEmitter<null> = new EventEmitter<null>()

  @HostListener('document:click', ["$event.target"]) outsideClick(element: HTMLElement){
    if(!this.elementRef.nativeElement.contains(element)){
      this.closeTabEmitter.emit(null)
    }

  }

}
