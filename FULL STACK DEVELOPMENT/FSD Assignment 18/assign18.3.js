function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Chain 3 messages with delay
delay(1000)
    .then(() => {
        console.log("Message 1 after 1 second");
        return delay(2000);
    })
    .then(() => {
        console.log("Message 2 after 2 more seconds");
        return delay(3000);
    })
    .then(() => {
        console.log("Message 3 after 3 more seconds");
    });