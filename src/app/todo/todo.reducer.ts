import * as fromTodo from './todo.actions';
import { Todo } from './todo-model/todo.model';

const Todo1 = new Todo('Vencer a Thanos');
const Todo2 = new Todo('Salvar al mundo');
const Todo3 = new Todo('Arreglar traje IronMan');


const estadoInicial : Todo[] = [Todo1, Todo2, Todo3];
export function todoReducer (   state = estadoInicial, 
                                action: fromTodo.Acciones ) : Todo[] {
    switch ( action.type ) {
        case fromTodo.AGREGAR_TODO: 
            const todo = new Todo( action.texto );
            return [...state, todo];
        
        case fromTodo.EDITAR_TODO:
            return state.map ( todoEdit =>{
                if ( todoEdit.id === action.id) {
                    return {...todoEdit, texto: action.texto};
                } else {
                    return todoEdit;
                }
            })

        case fromTodo.TOGGLE_TODO:
            return state.map ( todoEdit =>{
                if ( todoEdit.id === action.id) {
                    return {...todoEdit, completado: ! todoEdit.completado};
                } else {
                    return todoEdit;
                }
            })
        
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => { return { ...todoEdit, completado: action.completado }; });
    
        case fromTodo.BORRAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id );

        case fromTodo.BORRAR_ALL_TODO:
                return state.filter( todoEdit => ! todoEdit.completado );

        default: return state;
    }
}
