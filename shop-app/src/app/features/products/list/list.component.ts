import { Component } from '@angular/core';
import { PRODUCTS } from '../../../shared/mock-data';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'shop-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CardComponent] // підключаємо CardComponent
})
export class ListComponent {
  public items = PRODUCTS;
}