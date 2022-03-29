let inputNumber = prompt('Enter the number');
let reverseNumberString = '';
for(i= inputNumber.length-1;i>=0;i--){
    reverseNumberString += inputNumber[i]
}
document.write(reverseNumberString);