let num = prompt("Enter your number: ");
let i = 1;
let total = 0;
for (; i <= num; i ++) {
    total += total+i;
}
alert(total);