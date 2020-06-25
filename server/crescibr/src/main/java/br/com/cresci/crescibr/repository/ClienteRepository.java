package br.com.cresci.crescibr.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cresci.crescibr.model.ClienteModel;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, Long>{
	//get by email.
	public Optional<ClienteModel> findByUsuario(String usuario);
	//get by id do cliente.
	public Optional<ClienteModel> findByidCliente(Long idClient);
	//pega todos por email e cpf.
	public List<ClienteModel> findAllByUsuarioContainingIgnoreCase(String usuario);
	public List<ClienteModel> findAllByCpfContainingIgnoreCase(String cpf);
	
}
