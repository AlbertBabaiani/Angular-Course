import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {
  // @Output('val')
  // valueEmitter: EventEmitter<string> = new EventEmitter<string>()

  searched_value: string = ''

  searchValue(value: string){
    // this.valueEmitter.emit(value)
    this.searched_value = value
  }
}
