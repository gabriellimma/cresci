import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // crud - Create(Post) Read(Get) Update(Put) Delete(Delete)
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  putUsuario(usuario: Usuario){
    return this.http.put('http://localhost:8080/usuarios/editar', usuario, this.token);
  }

  getByIdUsuario(id: number){
    return this.http.get(`http://localhost:8080/usuarios/${id}`, this.token);
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://localhost:8080/usuarios/${id}`, this.token);
  }
}
