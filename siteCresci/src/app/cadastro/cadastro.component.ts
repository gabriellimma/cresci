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
      //location.assign('/cadastro')
      this.validaCorBorda()
      this.limpaCampo()
    }
  }

  validaCorBorda(){

    //Codigo funciona, mas estou procurando entender o pq de ta sulinhado em vermelho; 
    (<HTMLSelectElement>document.getElementById("data_password")).style.borderColor="red";
    (<HTMLSelectElement>document.getElementById("password2")).style.borderColor="red"
  }

  limpaCampo(){
    //Codigo funciona, mas estou procurando entender o pq de ta sulinhado em vermelho; 
    (<HTMLSelectElement>document.getElementById("data_password")).value ='';
    (<HTMLSelectElement>document.getElementById("password2")).value =''
  }

  cadastrar() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      location.assign('/usuarios');
    })
  }
}
