package br.com.cresci.Cresci.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table (name = "transacao")
public class TransacaoClienteProduto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	
	//@OneToOne
	//@JoinColumn(nullable = false)
	//private Produto produto;
	
	@OneToMany
	@JoinTable
	private CadastroCliente cadastroCliente;
	
}
