import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { first } from 'rxjs/operators';
import{ FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  retrurnURL:string ="/home";
  accesspointURL = 'http://localhost:49345/api/login';
  username = new FormControl();
  password = new FormControl();
  status:string;
  
  constructor(
    private router:Router,
    private authenticationService:AuthenticationService) { }
    
  ngOnInit() {
        this.authenticationService.logout();
  }

  login(){
    this.authenticationService.login(this.username.value,this.password.value,this.accesspointURL)
    .pipe(first())
    .subscribe(data=>{
      this.router.navigate([this.retrurnURL]);
    },
    error=>{
      this.status = error;
    });
  }
  
}
