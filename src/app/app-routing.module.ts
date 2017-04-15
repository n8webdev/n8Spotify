import { ArtistComponent } from './artist/artist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }