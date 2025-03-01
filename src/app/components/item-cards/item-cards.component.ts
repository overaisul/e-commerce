import { Component, inject, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.scss'],
})
export class ItemCardsComponent {
  private httpService = inject(HttpServiceService);
  private cardItemService = inject(CartServiceService);
  public items: Item[] = [];
  constructor() {}

  ngOnInit() {
    this.httpService
      .getAllProducts()
      .pipe()
      .subscribe((item) => {
        this.items = item.slice(0, 4);
        console.log(this.items);
        this.items.forEach((item) => {
          Object.assign(item, { quantity: 1, total: item.price });
        });
      });
  }
  addToCart(item: Item) {
    this.cardItemService.addToCart(item);
  }
}
