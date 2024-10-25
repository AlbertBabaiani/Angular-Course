import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { DecoratorsChildComponent } from "./decorators-child/decorators-child.component";

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [DecoratorsComponent, DecoratorsChildComponent],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css'
})
export class DecoratorsComponent {

  constructor(private renderer2: Renderer2){
    // this.renderer2.setStyle(this.p.nativeElement, 'background', 'red')
  }

  @ViewChild('p')
  p!: ElementRef<HTMLParagraphElement>


  @ViewChildren('pElement')
  many_p!: QueryList<ElementRef<HTMLParagraphElement>>


  @ViewChild('childComponent')
  childComponent!: DecoratorsChildComponent

  showP(){
    console.log(this.p.nativeElement)
    // this.p.nativeElement.style.background = 'red'
    this.renderer2.setStyle(this.p.nativeElement, 'background', 'red')
    console.log(this.childComponent.projectedP.nativeElement.innerText)
  }

  showManyP(){
    this.many_p.forEach(el => {
      console.log(el.nativeElement)
    })
  }


}
