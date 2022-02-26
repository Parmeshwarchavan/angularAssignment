import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  public successClass="test";

  public failedClass="failed"

  public hasError=false;

  public messege={

    "test":this.hasError,
    "failed":!this.hasError

  }
  constructor() { }

  ngOnInit(): void {
  }

}
