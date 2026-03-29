import { Component } from '@angular/core';
import { PRODUCTS } from '../../../shared/mock-data';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'shop-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CardComponent]
})
export class ListComponent {

  items = PRODUCTS;

  handleCardAction(id: number): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}