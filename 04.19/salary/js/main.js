//first try

/*
var salary = +prompt("enter your salary:");
var tax = salary * 0.1;
var tax1 = 2500 * 0.1;
var tax2 = 2500 * 0.2;
var tax1 = 25000 * 0.1;
var tax2 = 25000 * 0.2;
var tax3 = 50000 * 0.3;
//tax4 =  * 0.4;
var diff = 0;
if(0 > salary <= 2500 ){
    alert(tax)
}
else if(2500 < salary >= 50000){
salary -= 25000;
tax = salary * 0.2;//x
alert(`You need to pay ${tax + tax1} tax`)
else if(2500 < salary >= 50000){ 
   diff = (salary - 25000) * 0.2;
//salary -= 25000;
//tax = salary * 0.2;//x
alert(`You need to pay ${diff + tax1} tax`)
}
else if(50000 < salary >= 1000000){
    salary -= 50000;
    tax = salary * 0.3;
    alert(`You need to pay ${tax + tax1 + tax2} tax`)
}

//diff = salary - 25000;
*/

//second try

/*var salary = +prompt("enter your salary:");
var tax = salary * 0.1;
var tax1 = 25000 * 0.1;
var tax2 = 25000 * 0.2;
var tax3 = 50000 * 0.3;
//tax4 =  * 0.4;
var diff = 0;
if(0 > salary <= 2500 ){
    alert(tax)
}
else if(2500 < salary >= 50000){ 
   diff = (salary - 25000) * 0.2;
//salary -= 25000;
//tax = salary * 0.2;//x
alert(`You need to pay ${diff + tax1} tax`)
}
else if(50000 < salary >= 1000000){
    salary -= 50000;
    tax = salary * 0.3;
    alert(`You need to pay ${tax + tax1 + tax2} tax`)
}


//diff = salary - 25000;*/



//third try
const income = prompt("Enter your salary");
function calculateTax(income){
    let tax = 0;
    let remainingIncome = 0;

    switch(true){
        case (income <= 25000):
            tax = income * 0.1;
            break;
        case (income <= 50000):
            tax = 25000 * 0.1 + (income - 25000) * 0.2;
            break;
        case (income <= 100000):
            tax = 25000 * 0.1 + 25000 * 0.2 + (income - 50000) * 0.3;
            break;
        case (income <= 150000):
            tax = 25000 * 0.1 + 25000 * 0.2 + 50000 * 0.3 + (income - 100000) * 0.4;
            break;
        default:
            remainingIncome = income - 150000;
            tax = 25000 * 0.1 + 25000 * 0.2 + 50000 * 0.3 + 50000 * 0.4 + remainingIncome * 0.5;
            break;
    }
    return tax;
}
alert(calculateTax(income));