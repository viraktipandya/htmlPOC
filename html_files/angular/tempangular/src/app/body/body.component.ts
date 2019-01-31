 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})



export class BodyComponent  {


title="virakti pandya";

tempdate= new Date();

abc = {
    name:"virakti",
    age:25,

    address:
    {
        a1:"bhavnagar",
        b1:"surat"
    }


};

mon = ["jan","feb","mar","apr"];

arr = [10,20,30];



    GetCountryListResult= [

        {
    
            "country_code": "AFG",
    
            "country_id": 1,
    
            "country_name": "Afghanistan"
    
        },
    
        {
    
            "country_code": "AUS",
    
            "country_id": 13,
    
            "country_name": "Australia"
    
        },
    
        {
    
            "country_code": "BRA",
    
            "country_id": 29,
    
            "country_name": "Brazil"
    
        },
    
        {
    
            "country_code": "IND",
    
            "country_id": 95,
    
            "country_name": "India"
    
        },
    
        {
    
            "country_code": "IRQ",
    
            "country_id": 98,
    
            "country_name": "Iraq"
    
        },
    
        {
    
            "country_code": "IRL",
    
            "country_id": 99,
    
            "country_name": "Ireland"
    
        }
    
      ];

  
 
      flag:boolean =false;

 

  hello() {

    this.flag=true;   

  }


 

}
