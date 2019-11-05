package hu.elte.bankApp.controller;

import hu.elte.bankApp.model.Account;
import hu.elte.bankApp.model.PersonalData;
import hu.elte.bankApp.repository.AccountRepository;
import hu.elte.bankApp.repository.CardRepository;
import hu.elte.bankApp.repository.PersonalDataRepository;
import hu.elte.bankApp.repository.TransactionRepository;
import hu.elte.bankApp.wrapper.AccountIDsWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private PersonalDataRepository personalDataRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping("/accounts/getAccountByAccountNumber/{accountNumber}")
    public ResponseEntity<Account> getAccountByAccountNumber(@PathVariable String accountNumber) {
        Optional<Account> oAccount = accountRepository.findAccountByAccountNumber(accountNumber);
        if (oAccount.isPresent()) {
            Account account = oAccount.get();
            return ResponseEntity.ok(account);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("accounts/get/{id}")
    public ResponseEntity<Account> getAccount(
            @PathVariable Integer id
    ) {
        Optional<Account> oAccount = accountRepository.findById(id);
        if (oAccount.isPresent()) {
            Account account = oAccount.get();
            return ResponseEntity.ok(account);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/accounts/getAll")
    public Iterable<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping("/accounts/create")
    public ResponseEntity<Account> createAccount(
            @RequestBody Account account
    ) {
        Account savedAccount = accountRepository.save(account);
        return ResponseEntity.ok(savedAccount);
    }

    @PatchMapping("accounts/modify/{id}")
    public ResponseEntity<Account> modifyAccount(
            @PathVariable Integer id,
            @RequestBody Account account
    ) {
        Optional<Account> oAccount = accountRepository.findById(id);
        if (oAccount.isPresent()) {
            Account oldAccount = oAccount.get();
            oldAccount.setBalance(account.getBalance());
            oldAccount.setAccountNumber(account.getAccountNumber());
            Account savedAccount = accountRepository.save(oldAccount);
            return ResponseEntity.ok(savedAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/accounts/delete/{id}")
    public ResponseEntity deleteAccount(
            @PathVariable Integer id
    ) {
        try {
            accountRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/persons/getAll")
    public Iterable<PersonalData> getPersons() {
        return personalDataRepository.findAll();
    }

    @GetMapping("persons/get/{id}")
    public ResponseEntity<PersonalData> getPersonalAccount(
            @PathVariable Integer id
    ) {
        Optional<PersonalData> oPersonalAccount = personalDataRepository.findById(id);
        if (oPersonalAccount.isPresent()) {
            PersonalData personalAccount = oPersonalAccount.get();
            return ResponseEntity.ok(personalAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/persons/create")
    public ResponseEntity<PersonalData> createAccount(
            @RequestBody PersonalData person
    ) {
        PersonalData savedPersonalAccount = personalDataRepository.save(person);
        return ResponseEntity.ok(savedPersonalAccount);
    }


    @PatchMapping("/persons/{id}/addAccounts")
    public ResponseEntity<PersonalData> addAccountsToAPerson(
            @PathVariable Integer id,
            @RequestBody AccountIDsWrapper accountIds
    ) {
        PersonalData personalAccount = null;
        Optional<PersonalData> oPersonalAccount = personalDataRepository.findById(id);
        if (oPersonalAccount.isPresent()) {
            personalAccount = oPersonalAccount.get();
        } else {
            return ResponseEntity.notFound().build();
        }
        Iterable<Account> accounts = accountRepository.findAllById(accountIds.getIds());
          for(Account account : accounts){
              personalAccount.addAccount(account);
         }
        PersonalData savedPersonalAccount = personalDataRepository.save(personalAccount);
        return ResponseEntity.ok(savedPersonalAccount);
    }


}
