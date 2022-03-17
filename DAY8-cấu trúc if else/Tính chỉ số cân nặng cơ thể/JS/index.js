let cannang = prompt("Hãy nhập cân nặng của bạn (kg)");
let chieucao = prompt("Hãy nhập chiều cao của bạn (m)");
function tinhbmi(){
    let bmi = cannang/Math.pow(chieucao,2);
    document.getElementById("hienthibmi").innerHTML= "BMI bạn là: "+ bmi.toFixed(1);
let c = (bmi > 40)? document.getElementById("hienthi").innerHTML="Béo phì độ III":(bmi>=35)?document.getElementById("hienthi").innerHTML="Béo phì độ II":(bmi>=30)?document.getElementById("hienthi").innerHTML="Béo phì độ I":(bmi>=25)?document.getElementById("hienthi").innerHTML="Thừa cân":(bmi>=18.5)?document.getElementById("hienthi").innerHTML="Bình thường":(bmi>=17)?document.getElementById("hienthi").innerHTML="Gầy độ I":(bmi>=16)?document.getElementById("hienthi").innerHTML="Gầy độ II":document.getElementById("hienthi").innerHTML="Gầy độ III";
}