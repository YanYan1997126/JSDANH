function xemgia(){
    let loaihoaqua = document.getElementById("Loaihoaqua").value;
    switch (loaihoaqua){
        case 'Ổi':
        case 'Dưa Hấu':
            document.getElementById("Giahoaqua").innerHTML= "20000 VNĐ/kg";
            break;
        case 'Táo':
        case 'Xoài':
            document.getElementById("Giahoaqua").innerHTML= "30000 VNĐ/kg";
            break;
        case 'Cam':
        case 'Chôm Chôm':
            document.getElementById("Giahoaqua").innerHTML= "40000 VNĐ/kg";
            break;
        case 'Măng cụt':
            document.getElementById("Giahoaqua").innerHTML= "50000 VNĐ/kg";
            break;
    }
}