var salary = +prompt("enter your salary:");
var tax = salary * 0.1;
var tax1 = 2500 * 0.1;
var tax2 = 2500 * 0.2;
var tax3 = 50000 * 0.3;
//tax4 =  * 0.4;
if(0 > salary <= 2500 ){
    alert(tax)
}
else if(2500 < salary >= 50000){
salary -= 25000;
tax = salary * 0.2;//x
alert(`You need to pay ${tax + tax1} tax`)
}
else if(50000 < salary >= 1000000){
    salary -= 50000;
    tax = salary * 0.3;
    alert(`You need to pay ${tax + tax1 + tax2} tax`)
}
