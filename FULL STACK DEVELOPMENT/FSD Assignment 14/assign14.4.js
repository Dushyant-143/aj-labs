// Function that returns a closure for tax calculation
function createTaxCalculator() {
    return function(income) {
        let tax = 0;

        if (income <= 500000) {
            tax = income * 0.05;  // 5% tax
        } else if (income <= 1000000) {
            tax = income * 0.2;   // 20% tax
        } else {
            tax = income * 0.3;   // 30% tax
        }

        return tax;
    };
}

// Using the closure to calculate tax
const calculateTax = createTaxCalculator();

// Testing with different incomes
console.log(`Tax on ₹300000: ₹${calculateTax(300000)}`);
console.log(`Tax on ₹750000: ₹${calculateTax(750000)}`);
console.log(`Tax on ₹1200000: ₹${calculateTax(1200000)}`);