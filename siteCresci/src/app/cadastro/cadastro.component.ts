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

  data = {
    password: '',
    password_confirm: ''
  }



  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  validacao() {
    if (this.data.password === this.data.password_confirm) {
      alert('Cadastro efetuado com sucesso!')
      this.cadastrar();
    } else {
      alert('As senhas não batem')
      location.assign('/cadastro')
    }
  }
  cadastrar() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      location.assign('/usuarios');
    })
  }
}
