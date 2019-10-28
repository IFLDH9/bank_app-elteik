package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends CrudRepository<Card, Integer>{

}
