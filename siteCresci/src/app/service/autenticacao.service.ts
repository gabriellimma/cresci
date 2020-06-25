import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin){
    return this.http.post('http://localhost:8080/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', usuario)

  }

  btnSair(){
    let ok = false;
    let token = localStorage.getItem('token');

    if(token != null){
      ok = true;
    }
    return ok; 
  }

  btnLogin(){
    let ok = false;
    let token = localStorage.getItem('token');

    if(token == null){
      ok = true;
    }
    return ok;
  }


}