

    let sotiengoi = prompt("Hãy nhập số tiền gởi");
    a = parseInt(sotiengoi);
    let laisuat = prompt("Hãy nhập lãi suất %");
    b = parseFloat(laisuat)/100;
    let namgui = prompt("Hãy nhập số năm gửi");
    n = parseInt(namgui);
    let c = n*b*a ;
    document.write("Số tiền lãi thu được sau " + n + " năm gửi là :" + c+'<br/>');
    let d = a + c;
    document.write("Tiền thu được sau " + n + " năm gửi là :" + d);
