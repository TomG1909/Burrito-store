import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { catchError } from 'rxjs';
import { Product } from './models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  allItems: any = [];
  cart: any = [];




  constructor() { }


  addToShoppingCart(product: any) {

    this.allItems.push(product)

    console.log(this.allItems)


    this.increaseQuantityandPrice()
  }


  increaseQuantityandPrice() {

    const result = this.allItems.reduce((a: any, { name, quantity, price }: any) => {
      a[name] = a[name] || { name, quantity: 0, price: 0 };
      a[name].quantity += quantity;
      a[name].price += price;
      return a;

    }, {})



    console.log(Object.values(result));
  }
}


