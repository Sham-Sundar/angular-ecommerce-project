import { Routes } from '@angular/router';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SellerCentralComponent } from './components/seller-central/seller-central.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [

    {path: "home", redirectTo: "", pathMatch: "full"},
    {path:"", component: HomeComponent,pathMatch: "full"},
    {path:"products", component: ProductCartComponent},
    {path:"product/:id/:title", component: ProductDetailsComponent},
    {path:"seller-central", component: SellerCentralComponent},
    {path:"seller-central/edit-product", component: EditProductComponent},
    {path:"seller-central/add-product", component: AddProductComponent},
    {path:"**", component: NotFoundComponent}
];
