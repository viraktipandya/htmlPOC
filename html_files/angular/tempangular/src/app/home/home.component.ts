import { Component, OnInit } from '@angular/core';
import { ParkService } from './../park.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show : boolean =true;
  temp;
  n1;
 id;

  constructor(private p1:ParkService) {

    p1.getpark().subscribe(data =>{   
    // alert(data["Parks"]);

      console.log("jkhdfkjhsdkf"+data);

      this.myarray =  data["Parks"];

      //console.log(this.myarray);

      this.n1 = this.myarray[0].name;


    }   );


   }

  myarray : any;

  ngOnInit() {

   

  }

  hello()
  {
    //alert(data);
    this.show=false;
    //this.setcolor();
  }

  setcolor(id)
  {
    //this.id= document.getElementById("temp1");
    alert(this.id);
  }
    
  
}
