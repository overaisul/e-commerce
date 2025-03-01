import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showing-cards',
  templateUrl: './showing-cards.component.html',
  styleUrls: ['./showing-cards.component.scss'],
})
export class ShowingCardsComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Input()
  title: string = '';
  @Input()
  para: string = '';
  @Input() buttonText: string = '';
  @Input() className: string = '';
  @Input() ImageClass: string = '';

  constructor() {}

  ngOnInit() {}
}
