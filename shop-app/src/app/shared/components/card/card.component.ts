import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'shop-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({ required: true }) item!: Product;  // обов'язковий @Input
}