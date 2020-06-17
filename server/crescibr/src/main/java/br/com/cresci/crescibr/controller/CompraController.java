package br.com.cresci.crescibr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "cliente Inexistente."));
		
		
		CompraModel compra = new CompraModel();
		ClienteModel clienteCadastro = new ClienteModel();
		
		compra.setCompra(dto.getCompra());
		compra.setCliente(cliente);
		compra.setProduto(produto);
		//Medico medico = new Medico();
		//medico.setEspecialidade(especialidade);
		//medico.setCrm(dto.getCrm());
		//medico.setNome(dto.getNome());
		
		return repository.save(compra);
	}
}
