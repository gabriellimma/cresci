package br.com.cresci.crescibr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.crescibr.model.ClienteLoginModel;
import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.repository.ClienteRepository;
import br.com.cresci.crescibr.service.ClienteService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClienteController {
		
	@Autowired
	private ClienteService usuarioService;
	
	@Autowired
	private ClienteRepository repository;
	
	
	@GetMapping
	public ResponseEntity<List<ClienteModel>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ClienteModel> GetByID(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/login")
	public ResponseEntity<Object> Logar(@RequestBody ClienteLoginModel usuarioLogin){
		Optional<ClienteLoginModel> usuarioLogado = usuarioService.Logar(usuarioLogin);
		// Se o login do usuário for confirmado pelo UsuarioService, informa-se um ok e usuarioLogado recebe os dados
		if(usuarioLogado.isPresent())
			return ResponseEntity.ok(usuarioLogado.get());
		// Caso contrário, o acesso é negado
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Acesso não autorizado!");
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<ClienteModel> Autentication(@RequestBody ClienteModel usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarCliente(usuario));
	}
	
	@PutMapping("/editar")
	public ResponseEntity<ClienteModel> Alterar(@RequestBody ClienteModel usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
}
