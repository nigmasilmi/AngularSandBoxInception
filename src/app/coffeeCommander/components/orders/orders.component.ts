import { Component, OnInit } from '@angular/core';
import {OrdersService} from './../../shared/orders.service';
import { Coffee } from "./../../models/Coffee";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  coffees:Coffee[];
  coffeeOrder:Coffee[]=[];

  constructor(private orderService:OrdersService) { }

  ngOnInit() {
     this.orderService.getCoffees().subscribe(coffeesComing=>{
      this.coffees=coffeesComing
    })
  }
  addCoffe(coffee:Coffee){
    this.coffeeOrder.push(coffee);
  }

  removeCoffee(coffeeToRemove:Coffee){
    let index = this.coffeeOrder.indexOf(coffeeToRemove);
    if(index > -1){
      this.coffeeOrder.splice(index, 1);
    }
  }

  onSubmit(){
    console.log('is submitting');
    this.orderService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.orderService.form.value;
    
   this.orderService.createCoffeeOrder(data)
       .then(res => {
           console.log('is done');
       });
  }

  // addOrder(){
  //   this.coffeeOrder.forEach(item=>{
  //     this.orderService.addOrderInService(item);
  //   })
  // }

}
