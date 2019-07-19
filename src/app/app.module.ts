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
import { CarsearchComponent } from './components/SearchCar/carsearch/carsearch.component';
import { SearchbybrandComponent } from './components/SearchCar/searchbybrand/searchbybrand.component';
import { SearchbyemibudgetComponent } from './components/SearchCar/searchbyemibudget/searchbyemibudget.component';
import { SearchbybodytypeComponent } from './components/SearchCar/searchbybodytype/searchbybodytype.component';
import { SearchbyfueltypeComponent } from './components/SearchCar/searchbyfueltype/searchbyfueltype.component';
import { AdvsmallComponent } from './components/Ads/advsmall/advsmall.component';
import { AdvlargeComponent } from './components/Ads/advlarge/advlarge.component';
import { AdhlargeComponent } from './components/Ads/adhlarge/adhlarge.component';
import { LocatedealerComponent } from './components/locatedealer/locatedealer.component';
import { VersionheaderComponent } from './components/SubComponents/versionheader/versionheader.component';
import { CarmenuComponent } from './components/SubComponents/carmenu/carmenu.component';


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
    CarsectionComponent,
    CarsearchComponent,
    SearchbybrandComponent,
    SearchbyemibudgetComponent,
    SearchbybodytypeComponent,
    SearchbyfueltypeComponent,
    AdvsmallComponent,
    AdvlargeComponent,
    AdhlargeComponent,
    LocatedealerComponent,
    VersionheaderComponent,
    CarmenuComponent
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
      {path:'brand',component:BrandComponent, canActivate:[AuthorizationCheck]},
      {path:'car', component:CarComponent,canActivate:[AuthorizationCheck]}
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

