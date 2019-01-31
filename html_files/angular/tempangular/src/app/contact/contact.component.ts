import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './../myservice.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private temp1:MyserviceService) { }
  

  ngOnInit() {

  
  }
  xyz;
    uid;
    pass;
  hello(formrecord)
  {
      this.uid=formrecord.email;
    this.pass=formrecord.pwd;
  this.xyz = formrecord;
    console.log(this.uid+'\n'+this.pass);
    
    this.temp1.setf(this.xyz);
  }
  
  
}
