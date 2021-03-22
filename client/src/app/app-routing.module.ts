import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesViewComponent } from './movies-view/movies-view.component';

const routes: Routes = [
  {path: 'movies/list', component: MoviesListComponent},
  {path: 'movies/View', component: MoviesViewComponent},
  {path: '', redirectTo: 'movies/list',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
