import { Component, OnInit } from '@angular/core';
import{MyserviceService} from '../myservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private myserach:MyserviceService) { }

  myarray:any;

  ngOnInit() 
  {

    this.myserach.getdata().subscribe((data) => {

      console.log(data);

      this.myarray=data["GetAccountListResult"];

      console.log( this.myarray);

  });;



  }

}
