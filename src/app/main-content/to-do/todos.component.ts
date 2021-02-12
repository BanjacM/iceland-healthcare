import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { todos } from './mock';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  status: boolean;

  todos: Todo[];

  completedTodos: Todo[] = [];

  inputTodo = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = todos;
  }

  toggleDone(index: number) {
    this.todos.map((v, i) => {
      if (i === index) {
        v.completed = !v.completed;
        this.completedTodos.push(v);
        this.todos.splice(i, 1);
      }
    });
  }

  toggleCompletedDone(index: number) {
    this.completedTodos.map((v, i) => {
      if (i === index) {
        v.completed = !v.completed;
        this.todos.push(v);
        this.completedTodos.splice(i, 1);
      }
    });
  }

  deleteTodo(id: number, completed?:boolean) {
    if(completed){
      this.completedTodos = this.completedTodos.filter((v, i) => i !== id);
    } else{
      this.todos = this.todos.filter((v, i) => i !== id);
    }
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
  }

}
