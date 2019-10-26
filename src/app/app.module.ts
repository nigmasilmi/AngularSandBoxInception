import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SportoysService } from './m-fire/sportoys/sportoys.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './directors/cards/cards.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { HeroesTourComponent } from './heroes-tour/heroes-tour.component';
import { MFireComponent } from './m-fire/m-fire.component';
import { SliderComponent } from './includes/slider/slider.component';
import { HeroesComponent } from './heroes-tour/heroes/heroes.component';
import { HeroDetailComponent } from './heroes-tour/hero-detail/hero-detail.component';
import { MessagesComponent } from './heroes-tour/messages/messages.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './heroes-tour/dashboard/dashboard.component';
import { SportoysComponent } from './m-fire/sportoys/sportoys.component';
import { AddSportoyComponent } from './m-fire/add-sportoy/add-sportoy.component';
import { CoffeeCommanderAppComponent } from './coffeeCommander/coffee-commander-app/coffee-commander-app.component';
import { OrdersComponent } from './coffeeCommander/components/orders/orders.component';
import { OrdersListComponent } from './coffeeCommander/components/orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    HeroesTourComponent,
    MFireComponent,
    SliderComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    LandingComponent,
    DashboardComponent,
    SportoysComponent,
    AddSportoyComponent,
    CoffeeCommanderAppComponent,
    OrdersComponent,
    OrdersListComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SportoysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
