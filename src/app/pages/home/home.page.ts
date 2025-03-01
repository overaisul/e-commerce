import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { ShowingCardsComponent } from '../../components/showing-cards/showing-cards.component';
import { CompanyBannerComponent } from '../../components/company-banner/company-banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ItemCardsComponent } from '../../components/item-cards/item-cards.component';
import { ChooseCardsComponent } from '../../components/choose-cards/choose-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NavbarComponent,
    HeroSectionComponent,
    CompaniesComponent,
    ShowingCardsComponent,
    CompanyBannerComponent,
    FooterComponent,
    ItemCardsComponent,
    ChooseCardsComponent,
  ],
})
export class HomePage {
  constructor() {}
}
