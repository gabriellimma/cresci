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

  getAllUsuarios() {
    return this.http.get('http://93.188.161.223:9000/user', this.token);
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('http://93.188.161.223:9000/user', usuario, this.token);
  }

  putUsuario(usuario: Usuario){
    return this.http.put('http://93.188.161.223:9000/user', usuario, this.token);
  }

  getByIdUsuario(id: number){
    return this.http.get(`http://93.188.161.223:9000/user/${id}`, this.token);
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`, this.token);
  }
}
