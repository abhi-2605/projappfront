import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : DataService, private router:Router) { }
  canActivate(): boolean  {
    if(this.auth.loggedin()){
      
      return true;
  }
  else{
   this.router.navigate([""]);
    return false;
  }
  }
}
