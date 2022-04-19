import { Component } from '@angular/core';
import { Product } from './models/product.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Burrito-store';

  burritoCheese = new Product('Burrito Cheese', 9.50, 1);
  burritoClassic = new Product('Burrito Classic', 8.00, 1)
}
