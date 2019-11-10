package hu.elte.bankApp.controller;

import hu.elte.bankApp.model.*;
import hu.elte.bankApp.repository.AccountRepository;
import hu.elte.bankApp.repository.CardRepository;
import hu.elte.bankApp.repository.PersonalDataRepository;
import hu.elte.bankApp.repository.TransactionRepository;
import hu.elte.bankApp.security.AuthenticatedUser;
import hu.elte.bankApp.wrapper.IDsWrapper;
import hu.elte.bankApp.wrapper.TransactionWrapper;
import jdk.vm.ci.meta.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired
    private AuthenticatedUser authenticatedUser;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private PersonalDataRepository personalDataRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/accounts/get/byAccountNumber/{accountNumber}")
    public ResponseEntity<Account> getAccountByAccountNumber(@PathVariable String accountNumber) {
        Optional<Account> oAccount = accountRepository.findAccountByAccountNumber(accountNumber);
        if (oAccount.isPresent()) {
            Account account = oAccount.get();
            return ResponseEntity.ok(account);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("accounts/get/byID/{id}")
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

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("accounts/get/byOwner/{ownerName}")
    public Iterable<Account> getAccountByOwner(
            @PathVariable String ownerName
    ) {
        PersonalData person = null;
        Optional<PersonalData> foundPerson = personalDataRepository.getPersonalDataByName(ownerName);
        if (foundPerson.isPresent()) {
            person = foundPerson.get();
        } else {
            return null;
        }
        return accountRepository.findAccountsByOwners(person);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("accounts/get/byDate/{date}")
    public Iterable<Account> getAccountByDate(
            @PathVariable LocalDate date
    ) {
        return accountRepository.findAccountsByCreatedAt(date);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/accounts/getAll")
    public Iterable<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("/accounts/create")
    public ResponseEntity<Account> createAccount(
            @RequestBody Account account
    ) {
        Account savedAccount = accountRepository.save(account);
        return ResponseEntity.ok(savedAccount);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
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

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
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

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PatchMapping("/accounts/{id}/addPersons")
    public ResponseEntity<Account> addPersonToAccount(
            @PathVariable Integer id,
            @RequestBody IDsWrapper personIds
    ) {
        Account account = null;
        Optional<Account> oAccount = accountRepository.findById(id);
        if (oAccount.isPresent()) {
            account = oAccount.get();
        } else {
            return ResponseEntity.notFound().build();
        }
        Iterable<PersonalData> persons = personalDataRepository.findAllById(personIds.getIds());
        for (PersonalData person : persons) {
            account.addPerson(person);
            person.addAccount(account);
            personalDataRepository.save(person);
            accountRepository.connectAccountAndPerson(account.getId(), person.getId());
        }
        Account savedAccount = accountRepository.save(account);
        return ResponseEntity.ok(savedAccount);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/persons/getAll")
    public Iterable<PersonalData> getPersons() {
        return personalDataRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("persons/get/byID/{id}")
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

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("persons/get/byName/{name}")
    public ResponseEntity<PersonalData> getPersonalAccountByName(
            @PathVariable String name
    ) {
        Optional<PersonalData> oPersonalAccount = personalDataRepository.getPersonalDataByName(name);
        if (oPersonalAccount.isPresent()) {
            PersonalData personalAccount = oPersonalAccount.get();
            return ResponseEntity.ok(personalAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("persons/get/byIDNumber/{number}")
    public ResponseEntity<PersonalData> getPersonalAccountByIDCardNumber(
            @PathVariable String number
    ) {
        Optional<PersonalData> oPersonalAccount = personalDataRepository.getPersonalDataByIdCardNumber(number);
        if (oPersonalAccount.isPresent()) {
            PersonalData personalAccount = oPersonalAccount.get();
            return ResponseEntity.ok(personalAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("/persons/create")
    public ResponseEntity<PersonalData> createAccount(
            @RequestBody PersonalData person
    ) {
        PersonalData savedPersonalAccount = personalDataRepository.save(person);
        return ResponseEntity.ok(savedPersonalAccount);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PatchMapping("/persons/{id}/addAccounts")
    public ResponseEntity<PersonalData> addAccountsToAPerson(
            @PathVariable Integer id,
            @RequestBody IDsWrapper accountIds
    ) {
        PersonalData personalAccount = null;
        Optional<PersonalData> oPersonalAccount = personalDataRepository.findById(id);
        if (oPersonalAccount.isPresent()) {
            personalAccount = oPersonalAccount.get();
        } else {
            return ResponseEntity.notFound().build();
        }
        Iterable<Account> accounts = accountRepository.findAllById(accountIds.getIds());
        for (Account account : accounts) {
            personalAccount.addAccount(account);
            account.addPerson(personalAccount);
            accountRepository.save(account);
            accountRepository.connectAccountAndPerson(account.getId(), personalAccount.getId());
        }
        PersonalData savedPersonalAccount = personalDataRepository.save(personalAccount);
        return ResponseEntity.ok(savedPersonalAccount);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/cards/get/byCardNumber/{cardNumber}")
    public ResponseEntity<Card> getCardByCardNumber(@PathVariable String cardNumber) {
        Optional<Card> oCard = cardRepository.getCardByCardNumber(cardNumber);
        if (oCard.isPresent()) {
            Card card = oCard.get();
            return ResponseEntity.ok(card);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("cards/get/byID/{id}")
    public ResponseEntity<Card> getCardByID(
            @PathVariable Integer id
    ) {
        Optional<Card> oCard = cardRepository.findById(id);
        if (oCard.isPresent()) {
            Card card = oCard.get();
            return ResponseEntity.ok(card);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("cards/get/byOwnerName/{ownerName}")
    public Iterable<Card> getCardByOwner(
            @PathVariable String ownerName
    ) {
        return cardRepository.getCardsByOwnerName(ownerName);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("cards/get/byCardType/{cardType}")
    public Iterable<Card> getCardsByCardType(
            @PathVariable CardType cardType
    ) {
        return cardRepository.getCardsByCardType(cardType);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/cards/getAll")
    public Iterable<Card> getCards() {
        return cardRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("/cards/create")
    public ResponseEntity<Card> createCard(
            @RequestBody Card card
    ) {
        Card savedCard = cardRepository.save(card);
        return ResponseEntity.ok(savedCard);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PatchMapping("cards/modify/{id}")
    public ResponseEntity<Card> modifyAccount(
            @PathVariable Integer id,
            @RequestBody Card card
    ) {
        Optional<Card> oCard = cardRepository.findById(id);
        if (oCard.isPresent()) {
            Card oldCard = oCard.get();
            oldCard.setCardNumber(card.getCardNumber());
            oldCard.setCardType(card.getCardType());
            oldCard.setOwnerName(card.getOwnerName());
            oldCard.setExpirationDate(card.getExpirationDate());
            Card savedCard = cardRepository.save(oldCard);
            return ResponseEntity.ok(savedCard);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @DeleteMapping("/cards/delete/{id}")
    public ResponseEntity deleteCard(
            @PathVariable Integer id
    ) {
        try {
            cardRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PatchMapping("/cards/{id}/addAccount")
    public ResponseEntity<Card> addAccountToCard(
            @PathVariable Integer id,
            @PathVariable Integer accountId
    ) {
        Account account = null;
        Optional<Account> oAccount = accountRepository.findById(accountId);
        if (oAccount.isPresent()) {
            account = oAccount.get();
        } else {
            return ResponseEntity.notFound().build();
        }

        Card card = null;
        Optional<Card> oCard = cardRepository.findById(id);
        if (oCard.isPresent()) {
            card = oCard.get();
        } else {
            return ResponseEntity.notFound().build();
        }

        card.setAccount(account);
        account.addCard(card);

        accountRepository.save(account);
        Card savedCard = cardRepository.save(card);
        return ResponseEntity.ok(savedCard);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/transactions/get/bySourceAccountNumber/{sourceAccountNumber}")
    public Iterable<Transaction> getTransactionBySourceAccountNumber(@PathVariable String sourceAccountNumber) {
        return transactionRepository.getTransactionsBySourceAccountNumber(sourceAccountNumber);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/transactions/get/byTargetAccountNumber/{targetAccountNumber}")
    public Iterable<Transaction> getTransactionByTargetAccountNumber(@PathVariable String targetAccountNumber) {
        return transactionRepository.getTransactionsByTargetAccountNumber(targetAccountNumber);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/transactions/get/byAccountName/{accountNumber}")
    public Iterable<Transaction> getTransactionByAccountNumber(@PathVariable String accountNumber) {
        return transactionRepository.getTransactionsBySourceAccountNumberAndTargetAccountNumber(accountNumber, accountNumber);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/transactions/get/byDate/{date}")
    public Iterable<Transaction> getTransactionByDate(@PathVariable LocalDate date) {
        return transactionRepository.getTransactionsByDateOfTransaction(date);
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("transactions/get/byID/{id}")
    public ResponseEntity<Transaction> getTransactionById(
            @PathVariable Integer id
    ) {
        Optional<Transaction> oTransaction = transactionRepository.findById(id);
        if (oTransaction.isPresent()) {
            Transaction transaction = oTransaction.get();
            return ResponseEntity.ok(transaction);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/transactions/getAll")
    public Iterable<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("/transactions/create")
    public ResponseEntity<Transaction> createTransaction(
            @RequestBody TransactionWrapper transactionWrapper
    ) {
        Optional<Account> oSourceAccount = accountRepository.findAccountByAccountNumber(transactionWrapper.getSourceAccountNumber());
        Optional<Account> oTargetAccount = accountRepository.findAccountByAccountNumber(transactionWrapper.getTargetAccountNumber());
        if (oSourceAccount.isPresent() && oTargetAccount.isPresent()) {
            Account sourceAccount = oSourceAccount.get();
            Account targetAccount = oTargetAccount.get();
            if (sourceAccount.getBalance() > transactionWrapper.getAmount()) {
                Transaction transaction = new Transaction();
                transaction.setDateOfTransaction(LocalDate.now());

                transaction.setSourceAccountNumber(sourceAccount.getAccountNumber());
                transaction.setTargetAccountNumber(targetAccount.getAccountNumber());
                transaction.setSourceAccount(sourceAccount);
                transaction.setTargetAccount(targetAccount);
                transaction.setValue(transactionWrapper.getAmount());

                sourceAccount.changeBalance(-1 * transactionWrapper.getAmount());
                targetAccount.changeBalance(transactionWrapper.getAmount());

                sourceAccount.addOutgoingTransaction(transaction);
                sourceAccount.addIncomingTransaction(transaction);
                accountRepository.save(sourceAccount);
                accountRepository.save(targetAccount);
                transactionRepository.save(transaction);
                return ResponseEntity.ok(transaction);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else
            return ResponseEntity.notFound().build();
    }
}
