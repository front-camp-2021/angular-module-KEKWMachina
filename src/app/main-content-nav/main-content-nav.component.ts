import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-main-content-nav',
  templateUrl: './main-content-nav.component.html',
  styleUrls: ['./main-content-nav.component.scss'],
})
export class MainContentNavComponent implements OnInit{
  @Input() itemQuantity = 0

  ngOnInit(): void {
  }
}
