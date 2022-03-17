let year = parseFloat(prompt("Nhập năm vào"));
while(isNaN(year)){
    year = parseFloat(prompt("Nhập năm vào"));
}
let mon = parseFloat(prompt("Nhập tháng vào"));
while(isNaN(mon)||(mon<0)||(mon>12)){
    mon = parseFloat(prompt("Nhập tháng vào"));
}
let day =parseFloat(prompt("Nhập ngày vào"));
while(isNaN(day)||(day<0)||(day>31)){
    day = parseFloat(prompt("Nhập ngày vào"));
}
document.write((day<10?"0"+day:day)+"-"+(mon<10?"0"+mon:mon)+"-"+year);