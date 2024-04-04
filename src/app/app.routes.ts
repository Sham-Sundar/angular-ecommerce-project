import { Routes } from '@angular/router';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [

    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'products', component: ProductCartComponent},
    {path:'product/:id/:title', component: ProductDetailsComponent},
    {path:'**', component: NotFoundComponent}
];
