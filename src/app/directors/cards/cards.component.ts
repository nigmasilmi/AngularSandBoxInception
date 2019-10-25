import { Component, OnInit, Input, Output } from '@angular/core';
import { DIRECTORS } from './../../../directorsDataJSLocal';
import { Director } from 'src/app/model/director';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  sheDirData: Director = DIRECTORS;

  // @Output()
  // showHerMovies = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

// custom methods
  herMoviesView(){
    console.log('el botón funciona');
  }
}
