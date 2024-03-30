import { Component, EventEmitter, Output, inject, output } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
