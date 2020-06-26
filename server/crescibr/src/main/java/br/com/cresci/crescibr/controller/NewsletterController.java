package br.com.cresci.crescibr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cresci.crescibr.model.NewsletterModel;
import br.com.cresci.crescibr.repository.NewsletterRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/newsletter")
@CrossOrigin("*")
@RequiredArgsConstructor
public class NewsletterController {

	@Autowired
	private final NewsletterRepository repository;
	
	@PostMapping
	public ResponseEntity<NewsletterModel> Post(@RequestBody NewsletterModel email){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(email));
	}
}
