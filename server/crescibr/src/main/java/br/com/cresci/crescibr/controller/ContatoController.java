package br.com.cresci.crescibr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.crescibr.model.ContatoModel;
import br.com.cresci.crescibr.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/contato")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ContatoController {
	
	@Autowired
	private final ContatoRepository repository;
	
	@PostMapping
	public ResponseEntity<ContatoModel> Post(@RequestBody ContatoModel cliente){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(cliente));
	}
	
}
