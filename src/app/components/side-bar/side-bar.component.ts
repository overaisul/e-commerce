import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { Item } from 'src/app/model/item';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [IonContent, RouterModule, CommonModule],
})
export class SideBarComponent {
  private cartService = inject(CartServiceService);
  public itemList: Item[] = [];
  grandTotal: number = 0;
  @Output() closeSideBar = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
    this.cartService.getItems().subscribe((items) => {
      this.itemList = items;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  closeBar() {
    this.closeSideBar.emit();
  }
  increaseQuantity(item: any) {
    item.quantity++;
    item.total = item.quantity * item.price;
    this.grandTotal = this.cartService.getTotalPrice();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.quantity * item.price;
      this.grandTotal = this.cartService.getTotalPrice();
    }
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
}
