// Constructor function for BankAccount
function BankAccount(initialBalance) {
    this.balance = initialBalance;
}

// Deposit method
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}. New Balance: ₹${this.balance}`);
};

// Withdraw method
BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        console.log("Insufficient balance.");
    } else {
        this.balance -= amount;
        console.log(`Withdrew: ₹${amount}. Remaining Balance: ₹${this.balance}`);
    }
};

// Demonstration
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.withdraw(1500);