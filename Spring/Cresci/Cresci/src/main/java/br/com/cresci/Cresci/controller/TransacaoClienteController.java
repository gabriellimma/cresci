package br.com.cresci.Cresci.controller;

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

import br.com.cresci.Cresci.model.TransacaoClienteProduto;
import br.com.cresci.Cresci.repository.TransacaoClienteProtudoRepository;




@RestController
@RequestMapping("/compra")
@CrossOrigin("*")
public class TransacaoClienteController {	

		@Autowired
		private TransacaoClienteProtudoRepository repository;
		
		@GetMapping
		public ResponseEntity<List<TransacaoClienteProduto>> GetAll(){
			return ResponseEntity.ok(repository.findAll());
		}
		
		@GetMapping("/{id}")
		public ResponseEntity<TransacaoClienteProduto> GetByID(@PathVariable long id){
			return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).
					orElse(ResponseEntity.notFound().build());
		}
		
		@PostMapping
		public ResponseEntity<TransacaoClienteProduto> Post(@RequestBody TransacaoClienteProduto TransacaoClienteProduto){
			return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(TransacaoClienteProduto));
		}
		
		@PutMapping
		public ResponseEntity<TransacaoClienteProduto> Put(@RequestBody TransacaoClienteProduto TransacaoClienteProduto){
			return ResponseEntity.status(HttpStatus.OK).body(repository.save(TransacaoClienteProduto));
		}
		
		@DeleteMapping("/{id}")
		public void delete (@PathVariable long id) {
			repository.deleteById(id);		
		}
	
}
