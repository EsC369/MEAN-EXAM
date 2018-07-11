import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  movie: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getOneMovie();
  }
  getOneMovie(){ 
    this._route.params.subscribe((params: Params) => {
      let movie = this._httpService.show_movie(params['id']);
      movie.subscribe(data => {
        console.log(data);
        this.movie = data['data'][0];
      })
    })
  }

  onDestroy(movie){
    let destroy = this._httpService.destroy_movie(movie._id);
    destroy.subscribe(data => {
      console.log(data);
      this._router.navigate(['/movies']);
    })
  }
}
