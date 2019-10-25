import { Component, OnInit } from '@angular/core';
import { Todo } from './../model/Todo';
import {TodoService} from './../services/todo.service';

@Component({
  selector: 'app-maintodo',
  templateUrl: './maintodo.component.html',
  styleUrls: ['./maintodo.component.css']
})
export class MaintodoComponent implements OnInit {
  //properties
  todos: Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

}
