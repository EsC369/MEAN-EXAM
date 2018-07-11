import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editmovie: {title: '', name: '', stars: '', review: ['']};
  movie: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getOneMovie();
  }
  onEdit(movie){
    let edit = this._httpService.edit_movie(movie._id, this.editmovie);
    edit.subscribe(data => {
      this._router.navigate(['/movies/' + movie._id]);
    })
  }
  getOneMovie(){
    this._route.params.subscribe((params: Params) => {
      let movie = this._httpService.show_movie(params['id']);
      movie.subscribe(data => {
        console.log(data);
        this.movie = data['data'][0];
        this.editmovie = {title: data['data'][0].title, name: data['data'][0].name, stars: data['data'][0].stars, review: data['data'][0].review};
      })
    })
  }
}
