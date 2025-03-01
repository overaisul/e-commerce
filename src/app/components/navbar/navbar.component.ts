import { Component, inject, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [NavbarComponent, SideBarComponent],
})
export class NavbarComponent {
  public itemcount: number = 0;
  private cartService = inject(CartServiceService);
  isOpen: boolean = false;
  isCartOpen: boolean = false;
  constructor() {}

  ngOnInit() {
    this.cartService.getItems().subscribe((items) => {
      this.itemcount = items.length;
    });
  }
  toggleAbout(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  toggleCart(event: Event) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }
  closeCart() {
    this.isCartOpen = false;
  }
}
