import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Added components:
// import { ReviewComponent } from './review/review.component';
import { ShowComponent } from './show/show.component';
import { moviesComponent } from './movies/movies.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    // ReviewComponent,
    EditComponent,
    NewComponent,
    moviesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
