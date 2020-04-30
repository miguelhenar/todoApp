import * as formFiltro from './filter.actions';

const estadoInicial: formFiltro.filtrosValidos = 'todos';

export function filtroReducer ( state = estadoInicial,
                                accion : formFiltro.acciones) : formFiltro.filtrosValidos {
    switch ( accion.type ){
        case formFiltro.SET_FILTRO:
            return accion.filtro;
            
        default: return state;
    }

}

