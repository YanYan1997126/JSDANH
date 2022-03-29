var total = 0;
var num;
while (num != -1){
    num = parseInt(prompt('Enter a number'))
    alert(num)
    total +=num;
}
document.write("this sum is "+ total)