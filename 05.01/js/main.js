
var studen1 = prompt("Enter the first student:");
var studen2 = prompt("Enter the second student:");
var studen3 = prompt("Enter the third student:");
var studen4 = prompt("Enter the fourth student:");
var studen5 = prompt("Enter the fifth student:");
var students = [studen1, studen2, studen3, studen4, studen5,];
students.sort().join(", ").toLocaleLowerCase();
console.log(students);
