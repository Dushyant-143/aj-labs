// Blocking task
function blockingTask() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Blocks for 3 seconds
    }
    console.log("Blocking task finished");
}

// Async task using promise
async function asyncTask() {
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("Async task finished");
}

// Run both
asyncTask();
blockingTask();