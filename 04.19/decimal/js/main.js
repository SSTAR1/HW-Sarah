var num = prompt("Enter a number:");
parseFloat(num);
var decimal = num % 1;
var whole = num - decimal;//Math.trunc(num)
alert("The whole number is: " + whole + " \n " + "The decimal number is: " + decimal);