import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardResolverService } from './services/card/card-resolver.service';
import { DiscountedItemsComponent } from './discounted-items/discounted-items.component';


const routes: Routes = [
  { path: 'products', component: MainContentComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'discounted', component: DiscountedItemsComponent },
  { path: "products/:id", component: ProductPageComponent, resolve: {
    card: CardResolverService
  } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
