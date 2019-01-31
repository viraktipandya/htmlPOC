import { Directive,ElementRef } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Directive({
  selector: '[appAddress123]'
})
export class Address123Directive {

  constructor(ele:ElementRef) 
  { 
    ele.nativeElement.innerText="7 dayton drive"
  }

}
