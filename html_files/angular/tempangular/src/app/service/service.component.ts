import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { FormGroup, FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  pass;
  email;
  formdata;
  msg;
  constructor() { }

  ngOnInit() 
  {
    /*this.formdata = new FormGroup({

      emailid : new FormControl("virakti.pandya@yahoo.com"),
      pwd : new FormControl("1234")*/

      this.formdata = new FormGroup({

        emailid : new FormControl("",Validators.compose([ Validators.required ,Validators.pattern("[^ @]*@[^ @]*") ] )

          

               ),
        pwd : new FormControl("pandya")
       });

      
    }

    hello( temprec){
      this.email=temprec.emailid;
     this.pass=temprec.pwd;

      if(this.email == "")
      {
        this.msg="Enter proper value in email id";
      }
      
     }


}
