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

  usuario: Usuario = new Usuario
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(private usuarioService: UsuarioService,
              private route: ActivatedRoute,  
              private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params['idCliente']
    this.findById(id)
    window.scroll(0,0)
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  salvar() {
    alert('inicio')
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/home'])
      alert('fim')
    })
  }

}
