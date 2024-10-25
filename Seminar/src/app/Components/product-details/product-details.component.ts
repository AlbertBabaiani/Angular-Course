import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Interfaces/IProduct.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input()
  product!: IProduct

  @Output()
  closeTabEmitter: EventEmitter<null> = new EventEmitter<null>()

  closeTab(){
    this.closeTabEmitter.emit(null)
  }
}
