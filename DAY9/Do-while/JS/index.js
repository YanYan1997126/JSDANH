var sum = 0;
var number;
do{
    number = parseInt(prompt('Enter a number'));
    sum += number;
}
while(number !=0);
document.write("This is sum "+sum);