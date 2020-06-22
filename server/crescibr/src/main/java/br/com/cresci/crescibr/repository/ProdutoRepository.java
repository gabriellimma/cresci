package br.com.cresci.crescibr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cresci.crescibr.model.ProdutoModel;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long>{
	public List<ProdutoModel> findAllByTituloContainingIgnoreCase(String titulo);
	public List<ProdutoModel> findAllByCategoriaContainingIgnoreCase(String categoria);
	public List<ProdutoModel> findAllByTamanhoContainingIgnoreCase(String tamanho);
	public List<ProdutoModel> findAllByPreco(double preco);
}
