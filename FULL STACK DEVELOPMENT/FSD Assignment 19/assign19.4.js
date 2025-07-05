function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processOrder() {
    await wait(1000);
    console.log("User data fetched");

    await wait(2000);
    console.log("Order details fetched");

    await wait(3000);
    console.log("Payment status fetched");

    console.log("Order completed");
}

processOrder();