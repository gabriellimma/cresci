import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // recebe o array com os usuários da api (usuario.service.ts)
  listaUsuarios: Usuario[]

  //injeção de dependencia
  constructor(private usuarioService: UsuarioService, private router: Router) { }


  //carregado ao abrir a pagina
  ngOnInit() {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Apenas administradores do site têm acesso à página de usuarios!');
      this.router.navigate(['/login']);
    }
    window.scroll(0,0)
    // this.findAllUsuarios()
  }

  //métodos

  // findAllUsuarios() {
  //   this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
  //     this.listaUsuarios = resp
  //   })
  // }

}
