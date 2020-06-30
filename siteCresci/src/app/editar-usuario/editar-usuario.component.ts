import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if(token == null){
      alert('Faça o login antes de acessar a página editar usuario, por favor!');
      this.router.navigate(['/login']);
    }
    window.scroll(0,0)
    let idCliente = this.route.snapshot.params['idCliente']
    this.findById(idCliente)
  }

  findById(idCliente: number) {
    this.usuarioService.getByIdUsuario(idCliente).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  salvar() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/perfil'])
      location.assign('/perfil')
    })
  }
}
