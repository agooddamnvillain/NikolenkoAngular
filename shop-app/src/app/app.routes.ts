import { Routes } from '@angular/router';
import { ListComponent } from './features/products/list/list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent }
];