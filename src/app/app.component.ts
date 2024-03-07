import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // TODOS API - https://dummyjson.com/docs/todos

  todos!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://dummyjson.com/todos').subscribe((todos) => {
      this.todos = todos;
    });
  }

  add(todo) {
    this.http
      .post<any[]>('https://dummyjson.com/todos/add', {})
      .subscribe((todo) => {
        this.todos.unshift(todo);
      });
  }

  // TODO: Implement a delete TODO action
  delete() {}

  // TODO: Implement an update TODO action
  editTodo() {}
}
