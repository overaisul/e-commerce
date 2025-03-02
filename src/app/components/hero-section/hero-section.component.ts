import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [RouterModule],
})
export class HeroSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
