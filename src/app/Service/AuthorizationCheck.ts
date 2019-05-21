import { Injectable, NgZone } from "@angular/core";
import { Router,CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthorizationCheck implements CanActivate{
    
    constructor(private router: Router, public zone:NgZone){}
    
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        console.log(localStorage.getItem('TokenInfo'));
        if(localStorage.getItem('TokenInfo')){
            return true;
        }
        //this.router.navigate(['/login'],{queryParams:{returnURL:state.url}});

       //this.zone.run(()=>this.router.navigate(['/login'],{queryParams:{returnURL:state.url}}));
       //this.zone.run(()=>this.router.navigate(['/login']));       
       this.router.navigate(['/login']);
        return false;
    }
    
}
