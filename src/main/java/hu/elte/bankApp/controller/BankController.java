package hu.elte.bankApp.controller;


import hu.elte.bankApp.model.Account;
import hu.elte.bankApp.repository.AccountRepository;
import hu.elte.bankApp.repository.CardRepository;
import hu.elte.bankApp.repository.PersonalDataRepository;
import hu.elte.bankApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("")
    public Iterable<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping("")
    public ResponseEntity<Account> createAccount(
            @RequestBody Account account
    ) {
        Account savedAccount = accountRepository.save(account);
        return ResponseEntity.ok(savedAccount);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Account> modifyAccount(
            @PathVariable Integer id,
            @RequestBody Account account
    ) {
        Optional<Account> oAccount = accountRepository.findById(id);
        if (oAccount.isPresent()) {
            Account oldAccount = oAccount.get();
            oldAccount.setName(account.getName());
            oldAccount.setBalance(account.getBalance());
            oldAccount.setAccountNumber(account.getAccountNumber());
            Account savedAccount = accountRepository.save(oldAccount);
            return ResponseEntity.ok(savedAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
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

}
