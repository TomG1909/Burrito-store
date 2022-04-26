import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  allItems: any = [];
  cart: any = [];
  cartIsEmpty = true;
  total: any = [];
  alreadyPushed = false;
  promoCode: string | undefined;
  promoCodeInserted = false;






  constructor() { }

  /**
   * This fuction adds products to cart, increases quantity of added products and updates the price
   * 
   * @param product {JSON Array of objects (Model Product)}
   */
  addToShoppingCart(product: any) {

    const existingItem = this.allItems.find((item: { id: any; }) => {
      return product.id === item.id;
    });

    if (existingItem) {

      existingItem.quantity++;
      existingItem.updatedPrice = existingItem.quantity * existingItem.price;
    } else {

      this.allItems.push(product);// Push the item into the cart
    }
    this.cartIsEmpty = false; //boolean variable if false removes image and text of empty cart
    console.log(this.allItems)

    this.getTotalSum();
  }
  /**
   * This function decreases quantity of an added product in cart and removes product completely when quantity < 0
   * 
   * @param product {JSON Array of objects (Model Product)}
   */
  decreaseQuantity(product: any) {
    const existingItem = this.allItems.find((item: { id: any; }) => {
      return product.id === item.id;
    });

    if (existingItem.quantity >= 2) {
      existingItem.quantity--;
      existingItem.updatedPrice = existingItem.quantity * existingItem.price;

    } else {
      this.allItems.splice(product, 1)

    } if (this.allItems == 0) {
      this.cartIsEmpty = true;
    }
    this.getTotalSum();

  }
  /**
   * This function removes Product of cart
   * 
   * @param product {JSON Array of objects (Model Product)}
   * 
   */
  removeItem(product: any) {


    this.allItems.splice(product, 1);
    this.getTotalSum();
    this.cartIsEmpty = true;
  }
  /**
   * This function calculates the finalsum of all products and takes into account two types of promocodes
   * Rabatt5 - Discount of 5 EUR, Super5 - Discount of 5%
   */
  getTotalSum() {
    let sum = 0;

    this.allItems.forEach((element: { updatedPrice: number; }) => {
      sum += element.updatedPrice;
    });
    this.total = []
    this.total.push(sum);

    if (this.promoCode == 'Rabatt5') {
      sum -= 5
      this.total = [];
      this.total.push(sum);
      this.promoCodeInserted = true;

    } else if (this.promoCode == 'Super5') {
      let result = sum - (sum * 0.05);
      this.total = [];
      this.total.push(result);
      this.promoCodeInserted = true;
    }

    console.log(this.total)
  }


}


