import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product';

@Component({
  selector: 'shop-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule] 
})
export class CardComponent {

  @Input({ required: true }) item!: Product;

  // 🔹 Output подія
  @Output() action = new EventEmitter<number>();

  // 🔹 метод для кнопки
  onBtnClick(): void {
    this.action.emit(this.item.id);
  }
}