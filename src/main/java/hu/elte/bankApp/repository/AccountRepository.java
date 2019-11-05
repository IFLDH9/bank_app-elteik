package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Account;
import hu.elte.bankApp.model.PersonalData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
    Optional<Account>findAccountByAccountNumber(String accountNumber);
}

