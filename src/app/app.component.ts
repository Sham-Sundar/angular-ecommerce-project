import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HeaderComponent } from './layout/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCartComponent, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'ng-app';

}
