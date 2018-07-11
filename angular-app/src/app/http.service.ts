import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  all_movies(){
    return this._http.get('/index');
  }

  add_movie(addmovie){
    return this._http.post('/create', addmovie);
  }

  add_review(id, addreview){
    return this._http.post("/addreview" + id, addreview)
  }

  show_movie(id){
    return this._http.get('/show/' + id);
  }

  edit_movie(id, editmovie){
    return this._http.put('/edit/' + id, editmovie);
  }

  destroy_movie(id){
    return this._http.delete('/destroy/' + id);
  }

}
