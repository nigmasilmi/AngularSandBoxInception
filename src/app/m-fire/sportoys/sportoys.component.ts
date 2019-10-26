import { Component, OnInit } from '@angular/core';
import { SportoysService } from './sportoys.service';
import { Sportoy } from 'src/app/model/sportoy';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sportoys',
  templateUrl: './sportoys.component.html',
  styleUrls: ['./sportoys.component.css'],
  animations: [trigger('fade', [
    state('void', style({
      backgroundColor: 'blue',
      opacity: 0
    })),

    transition('void => *', [
      animate(1000)
    ]),
    transition('* => void', [
      animate(2000)
    ]),
  ]
  ),
  trigger('fadeMore', [
    transition('void => *', [style({
      transform: 'translateX(100%)',
      opacity: 0
    }),
      animate(200)
    ]),
    transition('* => void', [style({
      transform: 'translateY(0)',
      opacity: 0
    }),
      animate(200)
    ]),

  ])]
})
export class SportoysComponent implements OnInit {
  sportoys: Sportoy[];
  editState = false;
  itemToEdit: Sportoy;

  constructor(private sportService: SportoysService) {
    this.sportService.getSportoys().subscribe(toysComing => {
      this.sportoys = toysComing;
    });
  }

  ngOnInit() {
    this.sportService.getSportoys()
      .subscribe(sportoysComing =>
        this.sportoys = sportoysComing);
  }

  deleteSportoy(event, item) {
    this.clearState();
    this.sportService.deleteSportoyInService(item);
  }

  editItem(event, item) {
    this.editState = true;
    this.itemToEdit = item;

  }

 clearState() {
    this.itemToEdit = null;
    this.editState = false;
  }

  updateItem(itemToEdit) {
    console.log('itemToEdit', itemToEdit);
    this.sportService.updateItemInService(itemToEdit);
    this.clearState();
  }

}


