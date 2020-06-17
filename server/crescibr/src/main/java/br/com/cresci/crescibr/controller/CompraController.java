package br.com.cresci.crescibr.controller;

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
import org.springframework.web.server.ResponseStatusException;

import br.com.cresci.crescibr.dto.CompraDTO;
import br.com.cresci.crescibr.model.ClienteModel;
import br.com.cresci.crescibr.model.CompraModel;
import br.com.cresci.crescibr.model.ProdutoModel;
import br.com.cresci.crescibr.repository.ClienteRepository;
import br.com.cresci.crescibr.repository.CompraRepository;
import br.com.cresci.crescibr.repository.ProdutoRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/comprar")
@CrossOrigin("*")
@RequiredArgsConstructor
public class CompraController {
	
	@Autowired
	private final ProdutoRepository produtoRepo;
	@Autowired
	private final CompraRepository repository;
	@Autowired
	private final ClienteRepository clienteRepo;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<CompraModel> GetByID(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping
	public ResponseEntity<List<CompraModel>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	
	//@DeleteMapping("/{id}")
	//public void delete(@PathVariable long id) {
	//	repository.deleteById(id);
	//}
		
	
	@PostMapping
	public CompraModel salvar (@RequestBody CompraDTO dto) {
	long idProduto = dto.getProduto();
		
		ProdutoModel produto  = produtoRepo				
				.findById(idProduto)
				.orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto Inexistente."));
		
	long idCliente = dto.getCliente();
	
		ClienteModel cliente = clienteRepo
				.findById(idCliente)
				.orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente Inexistente."));
		
		
		CompraModel compra = new CompraModel();
		@SuppressWarnings("unused")
		ClienteModel clienteCadastro = new ClienteModel();
		
		compra.setCompra(dto.getCompra());
		compra.setCliente(cliente);
		compra.setProduto(produto);
		
		return repository.save(compra);
	}
}
