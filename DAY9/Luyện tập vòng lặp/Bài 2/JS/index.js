let currentTemperature = parseFloat(prompt('Enter the current temperature (oF)'));
if (currentTemperature>100){
    document.write("Decrease the temperature");
}
else if(currentTemperature<20){
    document.write("Increase the temperature")
}