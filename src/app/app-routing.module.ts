import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
