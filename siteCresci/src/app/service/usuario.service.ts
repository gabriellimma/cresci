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
    return this.http.put('https://cresci-api.herokuapp.com/usuarios/editar', usuario, this.token);
  }

  getByIdUsuario(id: number){
    return this.http.get(`https://cresci-api.herokuapp.com/usuarios/${id}`, this.token);
  }

  deleteUsuario(id:number){
    return this.http.delete(`https://cresci-api.herokuapp.com/usuarios/${id}`, this.token);
  }
}
