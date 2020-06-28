import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  idCliente: string = localStorage.getItem('idCliente')
  usuario: string = localStorage.getItem('usuario')
  cpf: string = localStorage.getItem('cpf')
  nomeCliente: string = localStorage.getItem('nomeCliente')
  token: string = localStorage.getItem('token');
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(private usuarioService: UsuarioService, public autenticacao: AutenticacaoService, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login antes de acessar a página perfil, por favor!');
      this.router.navigate(['/login']);
    }
    window.scroll(0,0)
    this.findUsuario()

  }

  findUsuario(){
    this.usuarioService.getAllUsuarios().subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
    })
  }

}
