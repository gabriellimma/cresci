package br.com.cresci.Cresci.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.Cresci.model.CadastroCliente;
import br.com.cresci.Cresci.repository.CadastroClienteRepository;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin("*")
public class CadastroClienteController {

	@Autowired
	private CadastroClienteRepository repository;
	
	@GetMapping
	public ResponseEntity<List<CadastroCliente>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CadastroCliente> GetByID(@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).
				orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<CadastroCliente> Post(@RequestBody CadastroCliente cadastroCliente){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(cadastroCliente));
	}
}
