import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  usuario: Usuario = new Usuario;

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.findById(id);
  }


  findById(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp;
    }, err => {console.log(`Erro ${err.status}, não conseguimos buscar esse id.`)}
    )
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(()=>{
      alert("Cadastro deletado com sucesso.");
      this.router.navigate(['/usuarios']);
    })
  }

  btnNao(){
    this.router.navigate(['/usuarios']);
  }
}
