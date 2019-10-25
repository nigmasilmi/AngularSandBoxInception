import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] =[];

  //this method receives a string and pushes it to the array property messages
  
  add(message:string){
    this.messages.push(message);
  }

  //this method clears the array property messages

  clear(){
    this.messages=[];
  }

  constructor() { }
}
