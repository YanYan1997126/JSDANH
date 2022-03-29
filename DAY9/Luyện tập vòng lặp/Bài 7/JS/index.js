for (i = 1; i <= 100; i++) {
    console.log(i + '<br>')
}
for (j = 1; j <= 100; j++) {
    if (j % 15 == 0) {
        document.write(j + " is FizzBuzz"+'<br>')
    }
    else if (j % 5 == 0) {
        document.write(j + " is Buzz"+'<br>')
    }
    else if (j % 3 == 0) {
        document.write(j + " is Fizz"+'<br>')
    }
}