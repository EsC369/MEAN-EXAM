import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class moviesComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  movies = [];
  reviews = [];

  ngOnInit() {
    this.get_movies();
  }

  get_movies(){
    let movies = this._httpService.all_movies();
    movies.subscribe(data => {
      console.log(data);
      this.movies = data['data'];
    })
  }

  goShowmovie(movie){
    this._router.navigate(['/movies/' + movie._id]);
  }

  goEditmovie(movie){
    this._router.navigate(['/movies/' + movie._id + '/review'])
  }
}
