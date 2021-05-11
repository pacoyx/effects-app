import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

export const initialState = 0;


export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
}

