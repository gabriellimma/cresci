import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nomeCliente: string = localStorage.getItem('nomeCliente')
  foto: string = localStorage.getItem('foto')
  idCliente: string = localStorage.getItem('idCliente')
  idClienteNumber = parseInt(this.idCliente);
  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, public autenticacao: AutenticacaoService, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    

    if (token == null) {
      alert('Faça o login antes de acessar a página perfil, por favor!');
      this.router.navigate(['/entrar']);
    }

    window.scroll(0, 0);
    this.findById(this.idClienteNumber);

  }

  findById(idClienteNumber:number) {
    this.usuarioService.getByIdUsuario(idClienteNumber).subscribe((resp: Usuario) => {
      this.usuario = resp;

    })
  }

  salvar() {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp;
      localStorage.setItem('foto', this.usuario.foto)
      localStorage.setItem('nomeCliente', this.usuario.nomeCliente)
      location.assign('perfil')
      this.router.navigate(['perfil']);
    }, err => {alert("Opa, parece que algo está errado"), console.log(err)})
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.idCliente).subscribe(()=>{
      alert("Cadastro deletado com sucesso.");      
      localStorage.clear();
      this.router.navigate(['/notfound']);
    }, err => {alert("Opa, parece que algo está errado"), console.log(err)})
  }
}
