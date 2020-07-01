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


import br.com.cresci.crescibr.model.ProdutoModel;
import br.com.cresci.crescibr.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@GetMapping
	public ResponseEntity<List<ProdutoModel>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProdutoModel> GetByID(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}	
	
	@GetMapping("/categoria/{categoria}")
	public ResponseEntity<List<ProdutoModel>> GetByCategoria(@PathVariable String categoria){
		return ResponseEntity.ok(repository.findAllByCategoriaContainingIgnoreCase(categoria));
	}
	
	@GetMapping("/nome/{titulo}")
	public ResponseEntity<List<ProdutoModel>> GetByNome(@PathVariable String titulo){
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	
	@GetMapping("/tamanho/{tamanho}")
	public ResponseEntity<List<ProdutoModel>> GetByTamanho(@PathVariable String tamanho){
		return ResponseEntity.ok(repository.findAllByTamanhoContainingIgnoreCase(tamanho));
	}
	
	//funcionando apenas para preço exato :/	
	@GetMapping("/preco/{preco}")
	public ResponseEntity<List<ProdutoModel>> GetByPreco(@PathVariable double preco){
		return ResponseEntity.ok(repository.findAllByPreco(preco));
	}	

	@PostMapping("/cadastrar")
	public ResponseEntity<ProdutoModel> Post(@RequestBody ProdutoModel produto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(produto));
	}

	@PutMapping("/editar")
	public ResponseEntity<ProdutoModel> Put(@RequestBody ProdutoModel produto) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(produto));
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
