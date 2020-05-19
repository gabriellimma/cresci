import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      location.assign('/usuarios');
    })
  }
}
