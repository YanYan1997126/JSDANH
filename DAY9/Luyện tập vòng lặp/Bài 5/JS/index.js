
let n1 = 0, n2 = 1, nextTerm;
let sum = 0;

for (let i = 1; i <= 20; i++) {
    document.write(n1+"<br>")
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    sum = sum+n1;
}
document.write("The sum of 20 first number of: "+sum);

