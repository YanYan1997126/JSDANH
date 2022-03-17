let year = parseInt(prompt("Enter a year"));
if (year%4==0){
  if(year%100==0){
if (year%400==0){
  alert(year+" is leap year");
} else{
  alert(year+" is not leap year");
} 
}else {
  alert(year+" is  leap year"); }
  }else { alert(year+" is not leap year");
}