import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 для ngModel
import { PRODUCTS } from '../../../shared/mock-data';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Category } from '../../../shared/models/product';

@Component({
  selector: 'shop-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CardComponent, FormsModule] // 👈 додали FormsModule
})
export class ListComponent {

  // 🔹 повний список (НЕ змінюємо)
  public allProducts = PRODUCTS;

  // 🔹 відфільтрований список
  public filteredProducts = [...this.allProducts];

  // 🔹 пошук
  public searchQuery: string = '';

  // 🔹 вибрана категорія
  public selectedCategory: string = 'All';

  // 🔹 список категорій для select
  public categories = ['All', ...Object.values(Category)];

  // 🔹 подія від картки
  handleCardAction(id: number): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }

  // 🔹 фільтрація
  filterItems(): void {
    const query = this.searchQuery.toLowerCase();

    this.filteredProducts = this.allProducts.filter(item =>
      item.title.toLowerCase().includes(query) &&
      (this.selectedCategory === 'All' || item.category === this.selectedCategory)
    );
  }

  // 🔹 reset фільтрів + фокус
  resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredProducts = [...this.allProducts];

    input.focus();
  }
}