import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public cartItems: any = [];
  public productList = new BehaviorSubject<Item[]>([]);

  constructor() {}
  getItems() {
    return this.productList.asObservable();
  }
  setItems(items: Item[]) {
    this.cartItems.push(...items);
    this.productList.next(items);
  }
  addToCart(item: Item) {
    const existingItem = this.cartItems.find(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }

    this.productList.next(this.cartItems);
    this.getTotalPrice();
    console.log(this.cartItems);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItems.map((a: any) => {
      grandTotal += a.total;
    });

    return grandTotal;
  }

  removeCartItem(item: Item) {
    this.cartItems = this.cartItems.filter((a: any) => a.id !== item.id);
    this.productList.next(this.cartItems);
  }
}
