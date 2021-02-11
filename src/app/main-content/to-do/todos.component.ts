import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'I dont have to push "Skra" button to make a memo - I just start typing and I "confirm" the memo by using the skra button or by pressing Enter on the keyboard',
        completed: false
      },
      {
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        completed: false
      },
      {
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        completed: false
      },
      {
        content: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        completed: false
      },
      {
        content: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
        completed: false
      },
      {
        content: 'The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) { v.completed = !v.completed; }

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
  }

}
