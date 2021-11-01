import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { MainContentNavComponent } from './main-content-nav/main-content-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card/card.service';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardsComponent } from './cards/cards.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    MainContentNavComponent,
    FiltersComponent,
    PaginationComponent,
    CardsComponent,
    SearchfieldComponent,
    CardComponent,
    CheckboxComponent,
    WishlistComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
