package hu.elte.bankApp.wrapper;

public class TransactionWrapper {
    private String sourceAccountNumber;
    private String targetAccountNumber;
    private int value;

    public String getSourceAccountNumber() {
        return sourceAccountNumber;
    }

    public void setSourceAccountNumber(String sourceAccountNumber) {
        this.sourceAccountNumber = sourceAccountNumber;
    }

    public String getTargetAccountNumber() {
        return targetAccountNumber;
    }

    public void setTargetAccountNumber(String targetAccountNumber) {
        this.targetAccountNumber = targetAccountNumber;
    }

    public int getAmount() {
        return value;
    }

    public void setAmount(int amount) {
        this.value = amount;
    }
}
