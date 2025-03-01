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
    this.cartItems.push(item);
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
