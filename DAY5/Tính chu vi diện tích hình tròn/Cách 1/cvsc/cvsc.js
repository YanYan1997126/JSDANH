const Pi = 3.14;
let R = parseFloat(prompt("Nhập giá trị bán kính"));
while (isNaN(R)){
    R = parseFloat(prompt("Nhập giá trị bán kính"));
}
let C = (2*Pi*R).toFixed(3);
document.write("Chu vi hình tròn là:"+ C+'<br/>');
let S = ((Math.pow(R,2))*Pi).toFixed(3);
document.write("Diện tích hình tròn là:"+ S);