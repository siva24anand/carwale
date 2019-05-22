import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show:boolean = false;
  constructor(private authservice: AuthenticationService, private router: Router) { 
    if(localStorage.getItem('TokenInfo')){
      this.show = true;
    }
  }

  btnLogout()
  {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
