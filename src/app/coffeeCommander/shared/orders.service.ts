import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Coffee} from './../models/Coffee';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderArray:Array<Coffee>;
  coffee:Coffee;
  coffeeCollection:AngularFirestoreCollection<Coffee>;
  orderCollection:AngularFirestoreCollection<Coffee[]>;
  coffees:Observable<Coffee[]>;
  coffeeDoc:AngularFirestoreDocument<Coffee>;

  constructor(public afs:AngularFirestore) { 
    // this.orderCollection = this.afs.collection<Coffee[]>('coffeeOrders');
    this.coffeeCollection = this.afs.collection<Coffee>('coffees', ref=>ref.orderBy('name', 'asc'));
    this.coffees = this.afs.collection<Coffee>('coffees').snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Coffee;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  form = new FormGroup({
    customerName:new FormControl(''),
    orderNumber:new FormControl(''),
    coffeeOrder: new FormControl(''), 
    completed: new FormControl(false), 

  });

  getCoffees(){
    return this.coffees;
  }

  addOrderInService(item){
    this.orderCollection.add(item);
  }

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) =>{
        this.afs
            .collection("coffeeOrders")
            .add(data)
            .then(res => {
              {};
            console.log("esto es res de createCoffeeOrder: ",res);
          }, 
          err => reject(err));
    });
}

getCoffeeOrders() { 
  return this.afs.collection("coffeeOrders").snapshotChanges();
}

updateCoffeeOrder(data) {
  return this.afs.collection("coffeeOrders").doc(data.payload.doc.id).set({ completed: true }, { merge: true });
}

deleteCoffeeOrder(data) {
  return this.afs.collection("coffeeOrders").doc(data.payload.doc.id).delete();

}

}