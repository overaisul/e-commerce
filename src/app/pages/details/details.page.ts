import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ItemCardsComponent } from '../../components/item-cards/item-cards.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { ShowingCardsComponent } from '../../components/showing-cards/showing-cards.component';
import { CompanyBannerComponent } from '../../components/company-banner/company-banner.component';
import { ChooseCardsComponent } from '../../components/choose-cards/choose-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NavbarComponent,
    HeroSectionComponent,
    ItemCardsComponent,
    CompaniesComponent,
    ShowingCardsComponent,
    CompanyBannerComponent,
    ChooseCardsComponent,
    FooterComponent,
  ],
})
export class DetailsPage {
  private httpService = inject(HttpServiceService);
  private cartItem = inject(CartServiceService);
  public itemDetails: any = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const itemId = params['id'];
      if (itemId) {
        this.fetchItemDetails(itemId);
      }
    });
  }
  fetchItemDetails(id: number) {
    this.httpService.getOneProduct(id).subscribe((item) => {
      this.itemDetails = item;
      console.log(this.itemDetails);
    });
  }

  addTocart(item: any) {
    item.total = item.price;
    item.grandtotal = item.price;
    this.cartItem.addToCart(item);
  }
}
