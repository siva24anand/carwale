import { Injectable } from "@angular/core";
import { Router,CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { stat } from 'fs';

@Injectable()
export class AuthorizationCheck implements CanActivate{
    
    constructor(private router: Router){}
    
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        //console.log(state.url);
        //console.log('TokenInfo: ' + localStorage.getItem('TokenInfo'));
        if(localStorage.getItem('TokenInfo')){
            if(state.url == "/")
            {
                this.router.navigate(['/home']);
            }
            return true;
        }
        //this.router.navigate(['/login'],{queryParams:{returnURL:state.url}});
       this.router.navigate(['/login']);
        return false;
    }
    
}
