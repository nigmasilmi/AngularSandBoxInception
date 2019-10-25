import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  setClass() {
    let classes = {
      'list-group-item': true,
      'is-done': this.todo.completed
    }
    return classes;
  }
  onToggle(todo:Todo){
    todo.completed = !todo.completed;
  }

  delete(todo:Todo){
    console.log('toggle');


  }
}
