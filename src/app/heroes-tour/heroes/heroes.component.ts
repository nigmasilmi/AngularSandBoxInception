import { Component, OnInit } from '@angular/core';


import { Hero } from './../model/hero';
// import { HEROES } from './../model/mock-heroes';
import {HeroService} from './../../hero.service';
import { HEROES } from '../model/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //properties
  // hero: Hero;
  // selectedHero: Hero;
  // heroes = HEROES;
  heroes:Hero[];

  //methods

  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  // }

//does not return anything, but sets the property heroes to the injected values (data) by the service
  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  //calls the service method getHeroes that returns an Observable Array
  //the observable must bu susbcribed to wait for the response to be passed to the callback
  //in this case it is a arrow function that asigns to the current object's property heroes
  //the data retrieved by the observable
  
 
  //constructor
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

}
