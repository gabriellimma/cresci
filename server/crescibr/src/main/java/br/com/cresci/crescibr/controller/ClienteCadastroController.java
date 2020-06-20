package br.com.cresci.crescibr.controller;

import java.util.List;

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

import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.repository.ClienteRepository;


@RestController
@RequestMapping("/cadastrar")
@CrossOrigin("*")
public class ClienteCadastroController {

	@Autowired
	private ClienteRepository repository;
	
	@GetMapping("/{id}")
	public ResponseEntity<ClienteModel> GetByID(@PathVariable Long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping
	public ResponseEntity<List<ClienteModel>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@PostMapping
	public ResponseEntity<ClienteModel> Post(@RequestBody ClienteModel cliente){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(cliente));
	}
	
	@PutMapping
	public ResponseEntity<ClienteModel> Put(@RequestBody ClienteModel cliente){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(cliente));
	}
	
	@DeleteMapping("{/id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
}
