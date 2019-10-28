package hu.elte.bankApp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;

import static com.fasterxml.jackson.annotation.JsonProperty.Access.WRITE_ONLY;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode


public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String sourceAccountNumber;

    @Column(nullable = false)
    private String sourceAccountOwnerName;

    @Column(nullable = false)
    private String targetAccountNumber;

    @Column(nullable = false)
    private String targetAccountOwnerName;

    @Column(nullable = false)
    private int value;

    @Column(nullable = false)
    @CreationTimestamp
    // @JsonProperty(access = WRITE_ONLY)
    private LocalDate dateOfTransaction;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSourceAccountNumber() {
        return sourceAccountNumber;
    }

    public void setSourceAccountNumber(String sourceAccountNumber) {
        this.sourceAccountNumber = sourceAccountNumber;
    }

    public String getSourceAccountOwnerName() {
        return sourceAccountOwnerName;
    }

    public void setSourceAccountOwnerName(String sourceAccountOwnerName) {
        this.sourceAccountOwnerName = sourceAccountOwnerName;
    }

    public String getTargetAccountNumber() {
        return targetAccountNumber;
    }

    public void setTargetAccountNumber(String targetAccountNumber) {
        this.targetAccountNumber = targetAccountNumber;
    }

    public String getTargetAccountOwnerName() {
        return targetAccountOwnerName;
    }

    public void setTargetAccountOwnerName(String targetAccountOwnerName) {
        this.targetAccountOwnerName = targetAccountOwnerName;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public LocalDate getDateOfTransaction() {
        return dateOfTransaction;
    }

    public void setDateOfTransaction(LocalDate dateOfTransaction) {
        this.dateOfTransaction = dateOfTransaction;
    }
}
