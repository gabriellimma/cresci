import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../service/autenticacao.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario;
  senha: string;

  // data = {
  //   password: '',
  //   password_confirm: ''
  // }

  //private usuarioService: UsuarioService
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }



  ngOnInit(){
      
    window.scroll(0, 0)
  }

  cadastrar() {
    if (this.senha === this.usuario.senha) {
      this.autenticacaoService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['entrar'])
        alert('Usuario cadastrado com sucesso!')
       
      })
    } else{
      this.validaCorBorda()
      this.limpaCampo()
      alert('As senhas não são iguais')
      
    }
  }

  validaCorBorda() {
    (<HTMLSelectElement>document.getElementById("loginSenha")).style.borderColor = "red";
    (<HTMLSelectElement>document.getElementById("senha")).style.borderColor = "red"
  }

  limpaCampo() {
    (<HTMLSelectElement>document.getElementById("loginSenha")).value = '';
    (<HTMLSelectElement>document.getElementById("senha")).value = ''
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  // validacao() {
  //   if (this.data.password === this.data.password_confirm) {
  //     alert('Cadastro efetuado com sucesso!')
  //     this.cadastrar();
  //   } else {
  //     alert('As senhas não batem')
  //     //location.assign('/cadastro')
  //     this.validaCorBorda()
  //     this.limpaCampo()
  //   }
  // }

  // cadastrar() {
  //   this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
  //     this.usuario = resp;
  //     location.assign('/usuarios');
  //   })
  // }
}
