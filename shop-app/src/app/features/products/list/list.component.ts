import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 ДОДАТИ
import { Observable } from 'rxjs';

import { CardComponent } from '../../../shared/components/card/card.component';
import { ProductService } from '../../../shared/services/product.service';
import { Product, Category } from '../../../shared/models/product';

@Component({
  selector: 'shop-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [
    CardComponent,
    FormsModule,
    CommonModule // 👈 ОСЬ ЦЕ ГОЛОВНЕ
  ]
})
export class ListComponent implements OnInit {

  products$!: Observable<Product[]>;

  searchQuery: string = '';
  selectedCategory: string = 'All';

  categories = ['All', ...Object.values(Category)];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.items$;
    this.productService.loadInitialData();
  }

  onFilterChange(): void {
    this.productService.filterItems({
      query: this.searchQuery,
      category: this.selectedCategory
    });
  }

  resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.onFilterChange();
    input.focus();
  }

  handleCardAction(id: number): void {
    this.productService.deleteItem(id);
  }
}