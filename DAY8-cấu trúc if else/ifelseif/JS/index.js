let userName = prompt("Who are you");
if (userName=="Admin"){
    let passWord = prompt("Enter your password");
    if (passWord=="TheMaster"){
        document.write("Welcome");
    } 
    else if(passWord=="null"){
        document.write("Canceled");
    }
    else { document.write("Wrong password");}
}
else if (userName=="null"){
    document.write("canceled")
}
else {
    document.write("i don't know");
}