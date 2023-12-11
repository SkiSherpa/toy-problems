// What Javascript statement in place of "?" will make the result always be between 6 and 7?
const x = 2;
let y = 4;
function update(arg) {
    console.log(y, arg)
    return Math.random() + y * arg;
    //
}
y = 2;
// what do you put here
y = 3;
const result = update(x);
console.log(result);
