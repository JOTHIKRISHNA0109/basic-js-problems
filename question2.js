/*2. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/




function convertToCelcius(farenheit) {
      return (farenheit-32)*5/9;
}

function convertToFarenheit(celcius) {
      return (celcius*9/5)+32;
}
function main() {
  
  let celcius = 60 //input value
  let farenheit = 45  //input value
  
  console.log(convertToFarenheit(celcius));
  console.log(convertToCelcius(farenheit));
}

main()
