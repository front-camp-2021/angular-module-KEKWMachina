import { Component, OnInit, DoCheck } from '@angular/core';
import { CardService } from '../services/card/card.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-discounted-items',
  templateUrl: './discounted-items.component.html',
  styleUrls: ['./discounted-items.component.scss']
})
export class DiscountedItemsComponent implements OnInit {
  cards = [];
  time = new Date().getHours();
  timeDisplayed = String(new Date());
  subscribeTimer = 0;
  timeLeft = 0;
  pageAvailable: boolean = false;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => {
      this.cards = cards.slice(0, 9);
    });
    this.observableTimer()
  }

  ngDoCheck() {
    this.pageAvailable = this.time >= 8 && this.time <= 22 ? true : false;
    this.timeDisplayed = String(new Date()).slice(16, 24);
  }

  observableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
    });
  }

}
