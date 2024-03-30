import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'products', component: ProductCartComponent}

];
