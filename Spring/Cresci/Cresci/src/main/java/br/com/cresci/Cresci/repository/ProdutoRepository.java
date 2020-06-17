package br.com.cresci.Cresci.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cresci.Cresci.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

	
}
