num = prompt("Enter a number:");
parseFloat(num);
decimal = num % 1;
whole = num - decimal;//Math.trunc(num)
alert("The whole number is: " + whole + " \n " + "The decimal number is: " + decimal);