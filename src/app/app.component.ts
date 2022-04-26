import { Component } from '@angular/core';
import { Product } from './models/product.class';

import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Burrito-store';
  productList = [
    new Product(1, 'Burrito Cheese', 9.50, 1, 9.50),
    new Product(2, 'Burrito Classic', 8.00, 1, 8.50)
  ]


  constructor(public cart: ShoppingCartService) {

  }


}
