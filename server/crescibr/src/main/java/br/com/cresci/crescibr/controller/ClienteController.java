package br.com.cresci.crescibr.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.crescibr.model.ClienteLoginModel;
import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.service.ClienteService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClienteController {
		
	@Autowired
	private ClienteService usuarioService;
	
	
	@PostMapping("/logar")
	public ResponseEntity<ClienteLoginModel> Autentication(@RequestBody Optional<ClienteLoginModel> user){
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<ClienteModel> Autentication(@RequestBody ClienteModel usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarCliente(usuario));
	}
}
