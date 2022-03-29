
let n1 = 0, n2 = 1, nextTerm;

document.write('Fibonacci Series:'+'<br>');

for (let i = 1; i <= 20; i++) {
    document.write(n1 +'<br>');
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}