import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Todo } from '../list-todo/list-todo.model';

@Component({
  selector: 'app-list-todo',
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})

export class ListTodoComponent {

  todos = [
    new Todo(1, 'Learn To Dance', false, new Date()),
    new Todo(2, 'Learn To Fly', false, new Date()),
    new Todo(3, 'Learn To run', false, new Date())
    // { id: 1, description : 'Learn To Dance', done: false, targetDate: new Date()},
    // { id: 2, description : 'Learn To Fly', done: false, targetDate: new Date()}, 
    // { id: 3, description : 'Learn To run', done: false, targetDate: new Date()}
  ]

  // todo = {id: 1, description : 'Learn To Dance'}

  constructor(){}

  ngOnInit(){}
}
