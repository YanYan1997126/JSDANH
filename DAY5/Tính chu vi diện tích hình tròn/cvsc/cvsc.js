const Pi = 3.14;
let bk;
bk = prompt("Nhập giá trị bán kính");
R = parseFloat(bk)
let C = 2*Pi*R;
document.write("Chu vi hình tròn là:"+ C+'<br/>');
let S = Math.pow(R,2)*Pi;
document.write("Diện tích hình tròn là:"+ S);