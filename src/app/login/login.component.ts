import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  logindata={
    email:'',
    pass:''
  }
  ngOnInit(): void {
  }
  login(){
    this.dataservice.login(this.logindata)
    .subscribe(data =>{
     
     if(data.toString()=="Invalid password"){
       alert('invalid password')
     }
     else if(data.toString()=="User not resgistered"){
      alert('User not resgistered')
     }
     else{
    localStorage.setItem('token', data.toString())
    
     }
    })
  
  }
}
