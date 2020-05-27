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

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  salvar() {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/usuarios'])
      location.assign('/usuarios')
    })
  }
}
