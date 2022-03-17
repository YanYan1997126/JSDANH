

    let amountOfMoney = parseInt(prompt("Hãy nhập số tiền gởi"));
    let numberOfYear = parseInt(prompt("Hãy nhập số năm gởi"));
    let anualRate = parseFloat(prompt("Hãy nhập lãi suất %"));
    let totalMoneyRate = amountOfMoney*numberOfYear*anualRate/100
    document.write("Số tiền lãi thu được sau " + numberOfYear + " năm gửi là :" + totalMoneyRate+'<br/>');
    let totalMoney = amountOfMoney+totalMoneyRate;
    document.write("Tiền thu được sau " + numberOfYear + " năm gửi là :" + totalMoney);
