function fccong(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    f = parseInt(a) + parseInt(b);
    document.getElementById("kq").innerHTML= "Result Addition: " + f ;

}
function fctru(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    f = parseInt(a) - parseInt(b);
    document.getElementById("kq").innerHTML= "Result Subtraction : " + f ;

}
function fcnhan(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
  
    f = parseInt(a) *parseInt(b);
    document.getElementById("kq").innerHTML= "Result Multipulation: " + f  ;

}
function fcchia(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    f = parseInt(a)/parseInt(b);
    document.getElementById("kq").innerHTML= "Result Devision: " + f  ;

}