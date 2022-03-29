function Doanso(){
    let Range=parseInt(prompt('Enter the max of the range'));
    let randomNumber= parseInt(Math.floor(Math.random()*(Range+1)));
    
    let i = 1;
    let guestNumber;
    do{ 
         guestNumber = parseInt(prompt('Enter the guest number'));
        i++
    }
    while(guestNumber !=randomNumber && i<=3)
    if (guestNumber === randomNumber){
        alert('This is correct number')
    }
    else{alert('This is wrong number')}
}