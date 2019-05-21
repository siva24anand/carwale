import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


//For Material
import { MaterialModule } from '../material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

//For Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { UpcomingComponent } from './components/featured/upcoming/upcoming.component';
import { PopularComponent } from './components/featured/popular/popular.component';
import { LaunchedComponent } from './components/featured/launched/launched.component';
import { LoginComponent } from './components/login/login.component';

//For Http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//For Service
import { CarapiconnectService} from './Service/carapiconnect.service';

//For Forms
import { ReactiveFormsModule } from '@angular/forms';

//For Routing
import { RouterModule } from '@angular/router';

//For Authorization and Authentication
import { AuthorizationCheck } from './Service/AuthorizationCheck';
import { AuthenticationService } from './Service/authentication.service';

//Interceptors
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { ErrorInterceptor } from './Interceptor/errrorInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedComponent,
    UpcomingComponent,
    PopularComponent,
    LaunchedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home',component: AppComponent, canActivate:[AuthorizationCheck]},
      {path:'login', component: LoginComponent}
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:httpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthorizationCheck,
    AuthenticationService,
    CarapiconnectService],
  bootstrap: [AppComponent]
})

export class AppModule { }

