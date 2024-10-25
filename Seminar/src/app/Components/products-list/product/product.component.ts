import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CustomDirective } from '../../../Directives/custom.directive';
import { SuctomNgClassDirective } from '../../../Directives/suctom-ng-class.directive';
import { IProduct } from '../../../Interfaces/IProduct.interface';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, CustomDirective, SuctomNgClassDirective],
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
