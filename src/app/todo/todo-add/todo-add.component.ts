import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {
  txtInput : FormControl;

  constructor( private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    this.txtInput = new FormControl ( '', Validators.required );
  }

  public agregarTodo() {
    if ( ! this.txtInput.valid ) { return; }

    const accion = new fromTodo.AgregarTodoAction ( this.txtInput.value );
    this.store.dispatch ( accion );
    this.txtInput.setValue('');
  }

}
