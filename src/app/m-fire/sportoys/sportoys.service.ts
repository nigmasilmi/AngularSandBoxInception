import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Sportoy } from './../../model/sportoy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SportoysService {
  sportoy: Sportoy;
  sportoyCollec: AngularFirestoreCollection<Sportoy> = this.afs.collection('SporToys');
  sportoys: Observable<Sportoy[]>;
  sportoyDoc: AngularFirestoreDocument<Sportoy>;
  // usamos esta definición cuando vayamos a usar valuechanges() ::: sportoys:Observable<any>;
  // sportoys: any;

  constructor(public afs: AngularFirestore) {
    // this.sportoys = this.afs.collection('sporToys').valueChanges();
    this.sportoyCollec = this.afs.collection('sporToys', ref => ref.orderBy('sport', 'asc'));

    //to access the data with their id  we use snapshotChanges
    this.sportoys = this.afs.collection<Sportoy>('sporToys').snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Sportoy;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    /* this.sportoys = this.afs.collection<Sportoy>('sporToys').snapshotChanges().pipe(
          map(changes => changes.map(a => {
            const data = a.payload.doc.data() as Sportoy;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        ); */
  }

  getSportoys() {
    return this.sportoys;
  }

  addToy(sportoy: Sportoy) {
    this.sportoyCollec.add(sportoy);
  }

  deleteSportoyInService(item:any) {
    this.sportoyDoc = this.afs.doc<Sportoy>(`sporToys/${item.id}`);
    // console.log(this.sportoyDoc);
    this.sportoyDoc.delete();
  }

  editItemInService(item:any){
    this.sportoyDoc = this.afs.doc<Sportoy>(`sporToys/${item.id}`);
    // this.sportoyDoc.update();
    console.log('this.sportoyDoc: ',this.sportoyDoc);
    console.log('llega hasta el servicio');

  }

  updateItemInService(item){
    //identificar el id
    this.sportoyDoc = this.afs.doc<Sportoy>(`sporToys/${item.id}`);
    this.sportoyDoc.update(item);
    //hacer update con los datos tal
  }
}


