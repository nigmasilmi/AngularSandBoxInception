import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../shared/orders.service';
import { CoffeeCommanderAppComponent } from '../../coffee-commander-app/coffee-commander-app.component';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  coffeeOrders;
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () =>
    this.orderService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  markCompleted = data =>
    this.orderService.updateCoffeeOrder(data);

  deleteOrder = data => this.orderService.deleteCoffeeOrder(data);


}


