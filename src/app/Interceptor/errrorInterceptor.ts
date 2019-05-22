import { Injectable } from "@angular/core";
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(private authendicationService:AuthenticationService, private router: Router){}

    intercept(request: HttpRequest<any>, newRequest:HttpHandler):Observable<HttpEvent<any>> {
        return newRequest.handle(request).pipe(catchError(err=>{
            if(err.status == 401){
                this.authendicationService.logout();
            }
          const error = err.statusText || err.error.message;
            return throwError(error);
        }));
    }

}
