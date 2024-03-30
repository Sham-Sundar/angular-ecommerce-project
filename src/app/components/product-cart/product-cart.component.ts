import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule, SlicePipe, SearchBarComponent],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  searchData:string = '';
  product:Product[]= [];
  filteredProducts: Product[] = [];

  constructor(private productService:ProductsService, private sharedService: SharedService){
    
    //Receiving products from ProductsService
    this.productService.getProducts().subscribe((result)=>{
      // console.log(result);
      this.product = result;

      this.filteredProducts = this.product;
      
    })

    //Applying filtering logic
    this.sharedService.searchData$.subscribe(data => {
      this.searchData = data;
      
      if(this.searchData){
        this.filteredProducts = this.product.filter(x=>x.title.toLowerCase().includes(this.searchData))
      }else{
        this.filteredProducts = this.product;
      }
    })
  }
}



