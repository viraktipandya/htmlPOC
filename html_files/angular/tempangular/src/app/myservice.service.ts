import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  url="http://praveer-001-site1.ctempurl.com/MyTurnService.svc/GetAccountList";



  constructor(private http: HttpClient) { }


  getdata()
  {
    return this.http.get(this.url);
  }

    temp123 ;
  setf(data)
  {
    this.temp123=data;
  }

  getf()
  {
    return this.temp123;
  }


  
}
