import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card/card.service';
import { PagesService } from '../services/page/pages.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  filter = 'Search';

  constructor(
    private pagesService: PagesService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  setUserInput(input: any) {
    this.cardService.setSearch(input);
    this.pagesService.setPage('1');
  }

}
