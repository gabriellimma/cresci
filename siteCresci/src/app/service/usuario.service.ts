import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // crud - Create(Post) Read(Get) Update(Put) Delete(Delete)
  constructor(private http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get('http://93.188.161.223:9000/user');
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('http://93.188.161.223:9000/user', usuario);
  }

  putUsuario(usuario: Usuario){
    return this.http.put('http://93.188.161.223:9000/user', usuario);
  }

  getByIdUsuario(id: number){
    return this.http.get(`http://93.188.161.223:9000/user/${id}`);
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`);
  }
}
