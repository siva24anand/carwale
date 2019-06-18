import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

//For Material
import { MaterialModule } from '../material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

//For Http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//For Service
import { CarapiconnectService} from './Service/carapiconnect.service';

//For Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//For Routing
import { RouterModule } from '@angular/router';

//For Authorization and Authentication
import { AuthorizationCheck } from './Service/AuthorizationCheck';
import { AuthenticationService } from './Service/authentication.service';

//Interceptors
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { ErrorInterceptor } from './Interceptor/errrorInterceptor';

//Custom Material Module
import { CustomMaterialModule } from './Core/material.module';

//For Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { UpcomingComponent } from './components/featured/upcoming/upcoming.component';
import { PopularComponent } from './components/featured/popular/popular.component';
import { LaunchedComponent } from './components/featured/launched/launched.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { VersionComponent } from './components/version/version.component';
import { LocatorComponent } from './components/SubComponents/locator/locator.component';
import { CarheaderComponent } from './components/SubComponents/carheader/carheader.component';
import { CarsectionComponent } from './components/SubComponents/carsection/carsection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedComponent,
    UpcomingComponent,
    PopularComponent,
    LaunchedComponent,
    LoginComponent,
    HomeComponent,
    BrandComponent,
    CarComponent,
    VersionComponent,
    LocatorComponent,
    CarheaderComponent,
    CarsectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    MaterialModule,
    Ng2CarouselamosModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'login', component: LoginComponent},
      {path:'home',component: HomeComponent, canActivate:[AuthorizationCheck]},
      {path:'',component: AppComponent, canActivate:[AuthorizationCheck]},
      {path:'brand',component:BrandComponent, canActivate:[AuthorizationCheck]}
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

