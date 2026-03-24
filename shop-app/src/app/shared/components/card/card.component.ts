import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ConfigurableHighlightDirective } from '../../directives/configurable-highlight.directive';

@Component({
  selector: 'shop-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, ConfigurableHighlightDirective]
})
export class CardComponent {

  @Input({ required: true }) item!: Product;

  @Output() action = new EventEmitter<number>();

  onBtnClick(): void {
    this.action.emit(this.item.id);
  }
}