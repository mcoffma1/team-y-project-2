import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }


  sendMeal(meal: any) {

    console.log('in sendMeal() service')

    return this.http.post(`${env.API_URL}/meal`, meal,{
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    });
  }
}
