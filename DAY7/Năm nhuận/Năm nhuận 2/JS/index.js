let year = parseInt(prompt("Enter a year"));
while(year<0 || year>9000){
    year = parseInt(prompt("Enter a year"));
}
let isLeapYear = false;
if (year%4==0){
    if (year%100==0){
        if (year%400==0){
            isLeapYear = true;
        } 
       
    } 
    else { isLeapYear = true}
} 

if (isLeapYear ){
    alert(year + " is a leap year");
}
 else {alert(year + " is not leap year");}
