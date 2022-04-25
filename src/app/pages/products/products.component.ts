import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  template: `
    <section class="products">
      <app-product
        (addToCartClick)="addToCart($event)"
        [product]="product"
        *ngFor="let product of products"
      ></app-product>
    </section>
  `,
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(
    private productsSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productsSvc
      .getProducts()
      .pipe(tap((product: Product[]) => (this.products = product)))
      .subscribe();
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
