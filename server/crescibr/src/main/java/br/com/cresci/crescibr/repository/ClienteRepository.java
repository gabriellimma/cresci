package br.com.cresci.crescibr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cresci.crescibr.model.ClienteModel;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, Long>{

}
