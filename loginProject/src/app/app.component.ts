import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'loginProject';
  public firstName: String;
  public password: String;
  public homePage: boolean ;

  constructor(private router: Router) {
    this.homePage= true;
   }
  
  loginValidate(){
    console.log(this.firstName,this.password)
    if(this.firstName && this.password){
    this.homePage = false;
    this.router.navigateByUrl('/welcome');
    }   else{
      alert("Enter Name and Password");
    }
  }
}
