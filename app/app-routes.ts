import { Routes } from "@angular/router";

import { HomeComponent, AdminComponent, ProductListComponent } from './index';
import { ProductDetailComponent } from './product-details/product-detail.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "products",
        component: ProductListComponent
    },
    {
        path: "product/:id",
        component: ProductDetailComponent
    }
];