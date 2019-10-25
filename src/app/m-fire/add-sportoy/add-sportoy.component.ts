import { Component, OnInit } from '@angular/core';
import { SportoysService } from './../sportoys/sportoys.service';
import { Sportoy } from './../../model/sportoy';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-sportoy',
  templateUrl: './add-sportoy.component.html',
  styleUrls: ['./add-sportoy.component.css']
})
export class AddSportoyComponent implements OnInit {
  sportoyToAdd:Sportoy={
    name:'',
    kind:'',
    brand:'',
    sport:''
  };

  constructor(private addSportoySrv:SportoysService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    if(this.sportoyToAdd.name != '' && this.sportoyToAdd.kind != '' && this.sportoyToAdd.brand != '' && this.sportoyToAdd.sport != ''){
      this.addSportoySrv.addToy(this.sportoyToAdd);
      //clear the form
      this.sportoyToAdd.name = '';
      this.sportoyToAdd.kind = '';
      this.sportoyToAdd.brand = '';
      this.sportoyToAdd.sport = '';
    }
      
    }

}
