package br.com.cresci.crescibr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "doacoes")
public class DoeModel {
	@Column(name = "id_doacao", nullable = false)
	private long idDoacao;
	
	@Column(name = "id_doacao", nullable = false)
	private String email;
	
	@Column(name = "nome", nullable = false)
	private String nome;
	
	@Column(name = "instituicao", nullable = false)
	private String instituicao;
	
	@Column(name = "item", nullable = false)
	private String item;
}
