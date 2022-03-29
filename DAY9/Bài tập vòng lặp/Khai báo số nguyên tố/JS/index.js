let numberousPrimeNumber = parseInt(prompt('Enter the numberous of prime number you want to show'));
let count = 0;
let primeNumber = 2;
document.write(primeNumber)
primeNumber++;
while (count < numberousPrimeNumber) {
    for (j = 2; j < primeNumber; j++,primeNumber++) {
        if (primeNumber % j != 0) {
            
            count++;
            
        }
        document.write(primeNumber);
    }
}
