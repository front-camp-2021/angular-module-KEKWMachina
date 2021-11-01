import { Component, OnInit, Input } from '@angular/core';
import { WishlishtService } from '../services/wishlist/wishlisht.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;
  inInWishlist: boolean = false;

  constructor(private wishlishtService: WishlishtService) {}

  ngOnInit(): void {
    this.wishlishtService.getWishlistItems().forEach((item: any) => {
      if(item.id === this.card.id) {
        this.inInWishlist = true;
      }
    })
  }

  addToWishlist(card: any):void {
    if(!this.inInWishlist) {
      this.wishlishtService.addItem(card)
    } else {
      this.wishlishtService.removeItem(card);
    }
    this.inInWishlist = !this.inInWishlist;
  }
}
