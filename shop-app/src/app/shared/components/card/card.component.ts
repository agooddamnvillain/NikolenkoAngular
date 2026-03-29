import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { StatusColorPipe } from '../../pipes/status-color.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [CommonModule, TruncatePipe, StatusColorPipe, HighlightDirective],
  template: `
    <div 
      class="card"
      [class.expensive]="item.price > 1000"
      [appHighlight]="'#f9f6f1'"
      (click)="expanded = !expanded"
    >
      <!-- 🔹 Назва та Ціна завжди видимі -->
      <h3>{{ item.title }}</h3>
      <p><strong>Price:</strong> {{ item.price | currency }}</p>

      <!-- 🔹 Решта інформації відображається тільки якщо expanded -->
      <div *ngIf="expanded" class="details">

        <!-- Status через pipe -->
        <span 
          class="badge"
          [style.backgroundColor]="item.status | statusColor">
          {{ item.status }}
        </span>

        <!-- Discount -->
        <span *ngIf="item.isDiscount" class="discount">🔥 Sale</span>

        <img [src]="item.imageUrl" alt="{{ item.title }}" />

        <!-- truncate -->
        <p>{{ item.description | truncate:60 }}</p>

        <p><strong>Release:</strong> {{ item.releaseDate | date:'dd.MM.yyyy' }}</p>
        <p><strong>Category:</strong> {{ item.category }}</p>
        <p><strong>Tags:</strong> {{ item.tags.join(', ') }}</p>
        <p><strong>Colors:</strong> {{ item.colors.join(', ') }}</p>

        <!-- Safe Navigation -->
        <p>
          <strong>Specs:</strong>
          RAM {{ item.specs?.ram }}GB,
          Storage {{ item.specs?.storage }}GB,
          Color {{ item.specs?.color }}
        </p>

        <!-- Button -->
        <button *ngIf="item.quantity > 0" (click)="onBtnClick(); $event.stopPropagation()">Add to cart</button>
        <button *ngIf="item.quantity === 0" disabled>Out of stock</button>

      </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({ required: true }) item!: Product;
  @Output() action = new EventEmitter<number>();

  expanded = false; // стан для показу деталей

  onBtnClick(): void {
    this.action.emit(this.item.id);
  }
}