
// let n1 = 0, n2 = 1, nextTerm;
// let term = parseInt(prompt('Enter the term'));
// document.write('Fibonacci Series:'+'<br>');
// let i= 0;
// while(i<=term){
//     document.write(n1 +'<br>');
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;  
//     i++;
// }
// for (let i = 1; i <= term; i++) {
//     document.write(n1 +'<br>');
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
var array = [1,1];
do {
    var num = Number(prompt('Enter the number'))
} while ( num<=1 || num%1!=0);
while (array.length< num && num >2){
    array.push(array[array.length-1]+array[array.length-1])
}
alert("fibonaci is "+array.toString());