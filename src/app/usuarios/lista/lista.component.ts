import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select(state => state.usuarios).subscribe(usuarios => {
      this.usuarios = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });

    this.store.dispatch(cargarUsuarios());

    // this.usuarioService.getUsers()
    // .subscribe(data => {
    //   this.usuarios = data;
    // });

  }

}
