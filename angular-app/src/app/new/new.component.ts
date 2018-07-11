import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  movieInfo = {};
  errors = null;
  ngOnInit() {
    this.movieInfo = { title: "", name: "", stars: "", review: "" };
  }
  
  onSubmit(){
    let observable = this._httpService.add_movie(this.movieInfo);
    observable.subscribe(data => {
      console.log(data);
      if(data['message'] == 'success'){
        this.movieInfo = { title: "", name: "", stars: "", review: "" };
        this._router.navigate(['/']);
      }else{
        
          this.errors = data["errors"];
        
      }
    })
  }
}
