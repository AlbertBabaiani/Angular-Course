import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorators-child',
  standalone: true,
  imports: [],
  templateUrl: './decorators-child.component.html',
  styleUrl: './decorators-child.component.css'
})
export class DecoratorsChildComponent {
  @ContentChild('projectedP')
  projectedP!: ElementRef<HTMLParagraphElement>

  showP(){
    console.log(this.projectedP.nativeElement)
  }
}
