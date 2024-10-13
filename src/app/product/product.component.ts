import { Component, Input } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct.interface';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input("product-element")
  product!: IProduct

  get customStyle(){
    return this.product.is_in_inventory ? 'green' : 'red' 
  }
}
