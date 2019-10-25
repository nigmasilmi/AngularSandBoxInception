import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {HeroesTourComponent} from './heroes-tour/heroes-tour.component';
import {CardsComponent} from './directors/cards/cards.component';
import {MFireComponent} from './m-fire/m-fire.component';
import {DashboardComponent} from './heroes-tour/dashboard/dashboard.component';
import {HeroDetailComponent} from './heroes-tour/hero-detail/hero-detail.component';
import {TodolistComponent} from './todolist/todolist.component';
import {MainUsersAppComponent} from './usersapp/main-users-app/main-users-app.component';
import { CoffeeCommanderAppComponent } from './coffeeCommander/coffee-commander-app/coffee-commander-app.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'heroes', component: HeroesTourComponent},
  {path: 'dasheroes', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'she', component: CardsComponent},
  {path: 'mfire', component: MFireComponent},
  {path: 'todolist', component: TodolistComponent},
  {path: 'usersapp', component: MainUsersAppComponent},
  {path:'coffeecom', component:CoffeeCommanderAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
