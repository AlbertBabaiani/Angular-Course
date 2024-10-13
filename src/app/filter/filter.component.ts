import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterType } from '../Interfaces/FilterType';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  inStock: FilterType = "all"

  @Output("filter")
  filterEmitter: EventEmitter<FilterType> = new EventEmitter<FilterType>()

  changeFIlterType(): void{
    this.filterEmitter.emit(this.inStock)
  }
}
