import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions, private usuarioService: UsuarioService) {

    }


    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
                        catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                    )
            )
        )
    );

}
