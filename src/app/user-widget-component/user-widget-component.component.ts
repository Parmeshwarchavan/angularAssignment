import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-widget-component',
  templateUrl: './user-widget-component.component.html',
  styleUrls: ['./user-widget-component.component.css']
})
export class UserWidgetComponentComponent implements OnInit {

  public name="Parmeshwar Chavan";
  public gmail="parmeshwar@gmail.com";
  public status=true;

  status2(){
    if(this.status)
    {
      return "active";
    }
    else{
      return "inactive";
    }
  }
  
  public successClass="success";
  public failedClass="fail";
  
  public messege={
    "success":this.status,
    "fail":!this.status
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
