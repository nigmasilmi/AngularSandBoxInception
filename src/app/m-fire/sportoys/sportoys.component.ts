import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SportoysService } from './sportoys.service';
import { Sportoy } from 'src/app/model/sportoy';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sportoys',
  templateUrl: './sportoys.component.html',
  styleUrls: ['./sportoys.component.css']
})
export class SportoysComponent implements OnInit {
  sportoys: Sportoy[];
  editState: boolean = false;
  itemToEdit : Sportoy;

  constructor(private sportService: SportoysService) {
    this.sportService.getSportoys().subscribe(toysComing=>{
      this.sportoys=toysComing;
    })
  }

  ngOnInit() {
    this.sportService.getSportoys()
      .subscribe(sportoysComing =>
        this.sportoys = sportoysComing);
  }

  deleteSportoy(item){
    this.itemToEdit = null;
    this.editState = false;
    this.sportService.deleteSportoyInService(item);
  }

  editItem(event, item){
    // this.sportService.editItemInService(item);
    this.editState = true;
    this.itemToEdit = item;
    console.log('boolean: ', this.editState);
    console.log('item: ', this.itemToEdit);
  }

  toggleState(){
    // this.editState = !this.editState;
    this.editState = false;
  }

  updateItem(item){
    this.sportService.updateItemInService(item);
    this.toggleState();
  }
  
  }


