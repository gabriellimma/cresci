import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // recebe o array com os usuários da api (usuario.service.ts)
  listaUsuarios: Usuario[]

  //injeção de dependencia
  constructor(private usuarioService: UsuarioService) { }


  //carregado ao abrir a pagina
  ngOnInit(): void {
    this.findAllUsuarios()
  }

  //métodos

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp
    })
  }

}
