package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.Transaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer>{
    Iterable<Transaction> getTransactionsBySourceAccountNumber(String sourceAccountNumber);
    Iterable<Transaction> getTransactionsByTargetAccountNumber(String targetAccountNumber);
    Iterable<Transaction> getTransactionsBySourceAccountNumberAndTargetAccountNumber(String sourceAccountNumber, String targetAccountNumber);
    Iterable<Transaction> getTransactionsByDateOfTransaction(LocalDate date);
}
