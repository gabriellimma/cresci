package br.com.cresci.crescibr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.crescibr.model.DoeModel;
import br.com.cresci.crescibr.repository.DoeRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/doacao")
@CrossOrigin("*")
@RequiredArgsConstructor
public class DoeController {
	
	@Autowired
	private final DoeRepository repository;
	
	@GetMapping
	public ResponseEntity<List<DoeModel>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@PostMapping
	public ResponseEntity<DoeModel> Post(@RequestBody DoeModel cliente){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(cliente));
	}
}
