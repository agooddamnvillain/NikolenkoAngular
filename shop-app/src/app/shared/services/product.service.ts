import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product';
import { PRODUCTS } from '../mock-data';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FilterOptions } from '../models/filter-options';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private allItems: Product[] = PRODUCTS;

  // 🔹 головний state
  private itemsSubject$ = new BehaviorSubject<Product[]>([]);
  public items$ = this.itemsSubject$.asObservable();

  // 🔹 фільтри
  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    category: 'All'
  });

  constructor() {

    // 🔹 реактивна фільтрація
    this.filterSubject$
      .pipe(
        delay(0), // щоб уникнути sync проблем
      )
      .subscribe(options => {
        const filtered = this.allItems.filter(item => {
          const matchesQuery = item.title
            .toLowerCase()
            .includes(options.query.toLowerCase());

          const matchesCategory =
            options.category === 'All' ||
            item.category === options.category;

          return matchesQuery && matchesCategory;
        });

        this.itemsSubject$.next(filtered);
      });
  }

  // 🔹 імітація сервера
  getAll(): Observable<Product[]> {
    return of(this.allItems).pipe(delay(1000));
  }

  // 🔹 ініціалізація
  loadInitialData(): void {
    this.getAll().subscribe(data => {
      this.itemsSubject$.next(data);
    });
  }

  // 🔹 фільтрація
  filterItems(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  // 🔹 delete
  deleteItem(id: number): void {
    this.allItems = this.allItems.filter(item => item.id !== id);
    this.itemsSubject$.next(this.allItems);
  }
}