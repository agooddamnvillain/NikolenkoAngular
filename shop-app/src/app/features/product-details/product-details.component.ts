import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'shop-product-details',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product$!: Observable<Product | undefined>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product$ = this.productService.getById(+id);
    }
  }
}