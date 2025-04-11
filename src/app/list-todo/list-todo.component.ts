import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-list-todo',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {

  todos = [{ id: 1, description : 'Learn To Dance'},
    { id: 2, description : 'Learn To Fly'},
    { id: 3, description : 'Learn To run'}
  ]

  // todo = {id: 1, description : 'Learn To Dance'}

  constructor(){}

  ngOnInit(){}
}
