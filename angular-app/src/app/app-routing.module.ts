import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Added components:
import { moviesComponent } from './movies/movies.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
// import { ReviewComponent } from './show/review.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "movies", component: moviesComponent},
  {path: "movies/new", component: NewComponent},
  {path: "movies/:id", component: ShowComponent},
  {path: "movies/:id/edit", component: EditComponent},
  // {path: "movies/:id/review", component: ReviewComponent},
  {path: "", pathMatch: "full", redirectTo: "/movies"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
