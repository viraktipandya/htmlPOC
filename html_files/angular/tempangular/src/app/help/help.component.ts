import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private x:MyserviceService) { }

    tempdata;
    emailid;
    pass;
  ngOnInit() {

    this.tempdata = this.x.getf();
    console.log(this.tempdata.email);
    console.log(this.tempdata.pwd);
  }

}
