package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Account;
import hu.elte.bankApp.model.PersonalData;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;


@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
    Optional<Account>findAccountByAccountNumber(String accountNumber);

    @Transactional
    @Modifying
    @Query(
            value = " INSERT INTO account_owners (accounts_id, owners_id)\n" +
                    "       SELECT :account_id,:owners_id\n" +
                    "        WHERE NOT EXISTS (Select * From account_owners WHERE accounts_id = :account_id AND owners_id = :owners_id) ;",nativeQuery = true)
    void connectAccountAndPerson(@Param("account_id") Integer accountID, @Param("owners_id") Integer ownersID);

    Iterable<Account>findAccountsByOwners(PersonalData person);
    Iterable<Account>findAccountsByCreatedAt(LocalDate date);

}
