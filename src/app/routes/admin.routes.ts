import { Routes } from "@angular/router";
import { StoreComponent } from "../pages/store/store.component";
import { AdminComponent } from "../pages/admin/admin.component";
import { AdminProductsComponent } from "../pages/admin-products/admin-products.component";
export const ADMIN_ROUTES:Routes=[
    {path:'',component:AdminComponent,children:[
        {path:'products',component:AdminProductsComponent}
    ]}
]