import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ageInp:number=0;
  urAge:number =0;

  calcAge() {
    this.urAge =2021  - this.ageInp ;
  }
  
}
