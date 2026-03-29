import { Injectable } from '@angular/core';
import { Item, PRODUCTS } from '../../../shared/mock-data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private allItems = PRODUCTS;

  getAll(): Observable<Item[]> {
    return of(this.allItems).pipe(delay(1000)); // затримка 1 сек
  }

  getById(id: number | string): Observable<Item | undefined> {
    const product = this.allItems.find(item => item.id === +id);
    return of(product).pipe(delay(1000)); // симуляція завантаження
  }
}