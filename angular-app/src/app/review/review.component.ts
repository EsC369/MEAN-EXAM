import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
  reviewInfo = {yourName: '', stars: '', yourReview: ''};
  errors = [];
  reviews = []
  ngOnInit() {
  }
  
  onCreate(){
    let add_review = this._httpService.add_review(this.reviewInfo, this.reviews);
    add_review.subscribe(data => {
      console.log(data);
      if(data['message'] == 'success'){
        this.reviewInfo = {yourName: '', stars: '', yourReview: ''};
        this.reviews.push(data['reviews']); // push data or this.reviews.push(this.reviewInfo['reviews']);
        this._router.navigate(['/']);
      }else{
        if(data['errors'].errors.name){
          this.errors.push(data['errors'].errors.name.message);
        }
        if(data['errors'].errors.type){
          this.errors.push(data['errors'].errors.type.message);
        }
        if(data['errors'].errors.description){
          this.errors.push(data['errors'].errors.description.message);
        }
      }
    })
  }
}
