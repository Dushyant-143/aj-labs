console.log("Start");

setTimeout(() => {
    console.log("Async - setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Async - Promise");
});

console.log("End");