const sentence = "hello there from lighthouse labs (:";
let delay = 40;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
    }, delay);
    delay += 100;
}
setTimeout(() => {
    process.stdout.write("\n");
}, delay);