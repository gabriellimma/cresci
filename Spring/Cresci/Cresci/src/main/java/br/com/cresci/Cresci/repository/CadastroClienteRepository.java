package br.com.cresci.Cresci.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cresci.Cresci.model.CadastroCliente;

public interface CadastroClienteRepository extends JpaRepository<CadastroCliente, Long> {

}
