package br.com.cresci.crescibr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name = "produtos")
public class ProdutoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_produto")
	private long idProduto;

	@Column(name = "titulo", nullable = false)
	@Size(min = 3, max = 30)
	private String titulo;

	@Column(name = "descricao", nullable = false)
	@Size(min = 5, max = 300)
	private String descricao;

	@Column(name = "tamanho", nullable = false)
	@Size(min = 1, max = 2)
	private String tamanho;

	@Column(name = "quantidade", nullable = false) //falta colocar quantidade máxima
	private long quantidade;

	@Column(name = "preco", nullable = false)
	private double preco;

	@Column(name = "foto1", nullable = false)
	private String foto1;

	@Column(name = "foto2", nullable = false)
	private String foto2;

	@Column(name = "foto3", nullable = false)
	private String foto3;

	@Column(name = "foto4", nullable = false)
	private String foto4;

}