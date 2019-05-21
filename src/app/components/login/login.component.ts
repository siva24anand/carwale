import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retrurnURL:string;
  error:'';
  accesspointURL = 'http://localhost:49345/api/login';
  
  constructor(
    private router:Router,
    private authenticationService:AuthenticationService) { }
    
  ngOnInit() {
        this.authenticationService.logout();
  }

  onLogin(username:string, password: string){
    this.authenticationService.login(username,password,this.accesspointURL)
    .pipe(first())
    .subscribe(data=>{
      console.log(data);
      //this.router.navigate([this.retrurnURL]);
    },
    error=>{
      console.log(error);
      this.error = error;
    });
  }
  
}
