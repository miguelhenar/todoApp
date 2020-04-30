import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToggleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor( public store : Store<AppState> ) { }

  ngOnInit(): void {  }

  public toggleAll() {
      this.completado = ! this.completado;

      const accion = new ToggleAllTodoAction( this.completado );
      this.store.dispatch ( accion ); 
  }


}
