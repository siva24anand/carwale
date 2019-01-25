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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedComponent,
    UpcomingComponent,
    PopularComponent,
    LaunchedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

