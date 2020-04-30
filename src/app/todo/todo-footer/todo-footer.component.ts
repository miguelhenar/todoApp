import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  pendientes : number; 
  filtrosValidos: fromFiltro.filtrosValidos [] =['todos', 'completados', 'pendientes'];
  filtroSel: fromFiltro.filtrosValidos;
   
  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.subscribe ( state => {
      this.filtroSel = state.filtro;
      this.pendientes = state.todos.filter( todo => ! todo.completado ).length;
    })
  }

  public cambiarFiltro ( filtroSel : fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction( filtroSel );
    this.store.dispatch( accion );
  }

  public borrarCompletados() {
    const accion = new fromTodo.BorrarAllTodoAction( );
    this.store.dispatch( accion );
  }
}
