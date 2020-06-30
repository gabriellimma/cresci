import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  senha: string = localStorage.getItem('senha')
  fotoCliente: string = localStorage.getItem('fotoCliente')
  usuario: string = localStorage.getItem('usuario')
  nomeCliente: string = localStorage.getItem('nomeCliente')
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  usuarioBd: Usuario = new Usuario

  constructor(private usuarioService: UsuarioService,
              private route: ActivatedRoute, 
              public autenticacao: AutenticacaoService, 
              private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login antes de acessar a página perfil, por favor!');
      this.router.navigate(['/login']);
    }
    window.scroll(0,0)

    let id = this.route.snapshot.params['idProduto']
    this.findUsuario(id)

  }

  findUsuario(idCliente: number){
    this.usuarioService.getByIdUsuario(idCliente).subscribe((resp: Usuario)=>{
      this.usuarioBd = resp
    })
  }

  editar(){
    alert('inicio!')
    this.autenticacao.editar(this.usuarioBd).subscribe((resp: Usuario)=>{
      this.usuarioBd = resp
      alert('Dados Atualizados com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
