function Tinhdiem(){
    let toan = parseInt(document.getElementById("Toan").value);
    let van = parseInt(document.getElementById("Van").value);
    let anh = parseInt(document.getElementById("Anh").value);
    let sum = toan + van + anh
    let khuvuc = document.getElementById("khuvuc").value;
    switch (khuvuc){
        case 'KV1':
            let diem1= sum + 0.75;
            document.getElementById("hienthi").innerHTML= "Tổng điểm ĐH khối D của bạn là:" + diem1;
            break;
        case 'KV2-NT':
            let diem2 = sum + 0.5;
            document.getElementById("hienthi").innerHTML= "Tổng điểm ĐH khối D của bạn là:" + diem2;
            break;
        case 'KV2':
            let diem3 = sum + 0.25;
            document.getElementById("hienthi").innerHTML= "Tổng điểm ĐH khối D của bạn là:" + diem3;
            break;
        case 'KV3':
             let diem4 = sum ;
            document.getElementById("hienthi").innerHTML= "Tổng điểm ĐH khối D của bạn là:" + diem4;
            break;
    }
}