var num = +prompt("Enter a number:");
var rev = "";
var numS = num + "";
while(num != 0){
    b = num % 10;
    rev += b;
    num = (num - b) / 10;
}
if (numS == rev){
    alert("This number is palindromic");
}
else{
    alert("This number is NOT palindromic");
}
