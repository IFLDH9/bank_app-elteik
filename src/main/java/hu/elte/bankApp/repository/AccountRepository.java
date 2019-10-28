package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {


}

