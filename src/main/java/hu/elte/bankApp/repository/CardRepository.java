package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Card;
import hu.elte.bankApp.model.CardType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardRepository extends CrudRepository<Card, Integer>{
    Iterable<Card> getCardsByCardType(CardType name);
    Iterable<Card> getCardsByOwnerName(String name);
    Optional<Card> getCardByCardNumber(String cardNumber);

}
