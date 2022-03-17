function Hienthingay(){
    let thang = document.getElementById("thang").value;
    switch (thang){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById("hienthi").innerHTML= "Tháng " +thang + " có 31 ngày";
            break;
        case '2':
            document.getElementById("hienthi").innerHTML= "Tháng 2 có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById("hienthi").innerHTML= "Tháng " + thang + " có 30 ngày"
    }

}