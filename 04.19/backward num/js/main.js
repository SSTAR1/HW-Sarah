var num = +prompt("Enter a number:");
var rev = "";
while(num != 0){
    b = num % 10;
    rev += b;
    num = (num - b) / 10;
}
alert(rev);
/*problems: 
1. if its a big number(more than 17 numbers)- it doesent give the exact numbers.
2. if in the end of num there is 0, it doesnt includ it in the output.
*/