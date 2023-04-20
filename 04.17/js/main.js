//month=1, mysteryAmont=0, rentDue=0, gift=false;
var month= 1;
var mysteryAmont=0;
var rentDue=0;
var gift=false;

var salary = prompt("Enter your salary:");
var rent = prompt("Enter your rent:");

var balance = salary * 2;
if (balance>=rent){
    balance-=rent;
}
else{
    rentDue = rent;
}
month++;
balance +=salary/2;

if(balance >= rentDue){
    balance -= rentDue;
    rentDue = 0;
}
rent = rent +200;

if (balance>=rent){
    balance-=rent;
}
else{
    rentDue += rent;
}
balance -=500;
month++;
mysteryAmont = balance;
balance =0;

if(mysteryAmont<0){
    gift = true;
    mysteryAmont = mysteryAmont *(-1);
}

alert(month + "\n" + mysteryAmont + "\n" +  rentDue + "\n" +  gift);
//output:month, mysteryAmont, rentDue, gift;

