import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuarios: Usuario = new Usuario
  idCliente: string = localStorage.getItem('idCliente')
  usuario: string = localStorage.getItem('usuario')
  cpf: string = localStorage.getItem('cpf')
  nomeCliente: string = localStorage.getItem('nomeCliente')
  token: string = localStorage.getItem('token');
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login antes de acessar a página editar usuario, por favor!');
      this.router.navigate(['/login']);
    }
    
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuarios = resp
    })
  }

  findByIdCliente(idCliente: number) {
    this.usuarioService.getByIdUsuario(idCliente).subscribe((resp: Usuario) => {
      this.usuarios = resp
    })
  }

  salvar() {
    this.usuarioService.putUsuario(this.usuarios).subscribe((resp: Usuario) => {
      this.usuarios = resp
      this.router.navigate(['/perfil'])
      location.assign('/perfil')
    })
  }
}
