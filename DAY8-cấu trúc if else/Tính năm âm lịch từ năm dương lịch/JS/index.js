let namduonglich = prompt("Nhập năm dương lịch bạn muốn chuyển đổi")
let duCan = (namduonglich-3)%10;
let duChi = (namduonglich-3)%12;
function chuyendoi(){
    let Can = "";
    let Chi = "";
    switch (duCan){
        case 1:
            Can = "Giáp";
            break;
        case 2:
            Can = "Ất";
            break;   
        case 3:
            Can = "Bính";
            break;
        case 4:
            Can = "Đinh";
            break;
        case 5:
            Can = "Mậu";
            break;
        case 6:
            Can = "Kỷ";
            break;
        case 7:
            Can = "Canh";
            break;
        case 8:
            Can = "Tân";
            break;
        case 9:
            Can = "Nhâm";
            break;
        case 0:
            Can = "Quý";
            break;
    }
    switch (duChi){
        case 1:
            Chi = "Tý";
            break;
        case 2:
            Chi = "Sửu";
            break;   
        case 3:
            Chi = "Dần";
            break;
        case 4:
            Chi = "Mão";
            break;
        case 5:
            Chi = "Thìn";
            break;
        case 6:
            Chi = "Tỵ";
            break;
        case 7:
            Chi = "Ngọ";
            break;
        case 8:
            Chi = "Mùi";
            break;
        case 9:
            Chi = "Thân";
            break;
        case 10:
            Chi = "Dậu";
            break;
        case 11:
            Chi = "Tuất"
            break;
        default:
            Chi = "Hợi"
    }
    document.getElementById("hienthi").innerHTML= "Năm âm lịch là : " + Can +" "+ Chi;
}