import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParkService {

    url="assets/Parks.json";

  

  constructor(private http :HttpClient) { }

  getpark()
  {
    return this.http.get(this.url);
  }

}
