import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterType } from './Interfaces/FilterType';
import { SearchComponent } from './Components/Search/search.component';
import { FilterComponent } from './Components/filter/filter.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ClickOutsideDirective } from './Directives/click-outside.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    SearchComponent,
    FilterComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ClickOutsideDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  searchedValue: string = ""
  filteredType: FilterType = "all"

  getSearchValue(searchValue: string): void {
    this.searchedValue = searchValue;
  }

  getFilterType(filterType: FilterType): void {
    this.filteredType = filterType;
  }
}
