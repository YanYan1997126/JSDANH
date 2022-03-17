function fa(){
    var a = document.getElementById('n1').value;
var b = document.getElementById('n2').value;
var c = document.getElementById('pheptinh').value;
var f = 0;
if (c=="+"){
f = parseInt(a) + parseInt(b);
}
else if (c=="-"){
f = parseInt(a) - parseInt(b);
}
else if (c=="*"){
f = parseInt(a) *parseInt(b);
}
else {
f = parseInt(a) /parseInt(b);
}
document.getElementById("kq").value = f;
}