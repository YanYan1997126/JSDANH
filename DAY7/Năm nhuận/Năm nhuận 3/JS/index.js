let year = parseInt(prompt("Hãy nhập số năm vào:"));
let ad4 = year%4==0;
let leapyear = false;
if (ad4){
    let ad100 = year%100==0;
    if(ad100){
        let ad400 = year%400==0;
        if(ad400){
            leapyear = true;
        }
    } else { leapyear = true ;}
}
if (leapyear){
    alert(year+" is a leap year");
}
else {
    alert(year+" is not a leap year")
}