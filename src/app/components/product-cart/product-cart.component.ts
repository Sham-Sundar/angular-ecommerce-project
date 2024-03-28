import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule, SlicePipe, SearchBarComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  product:Product[]= [];

  constructor(private productService:ProductsService){
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      this.product = result;
    })
  }

}
