import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-tour',
  templateUrl: './heroes-tour.component.html',
  styleUrls: ['./heroes-tour.component.css']
})
export class HeroesTourComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() { }

  ngOnInit() {
  }

}
