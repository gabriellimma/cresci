package br.com.cresci.crescibr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cresci.crescibr.model.NewsletterModel;

@Repository
public interface NewsletterRepository extends JpaRepository<NewsletterModel, Long>{

}
