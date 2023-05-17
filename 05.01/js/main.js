
/*var studen1 = prompt("Enter the first student:");
var studen2 = prompt("Enter the second student:");
var studen3 = prompt("Enter the third student:");
var studen4 = prompt("Enter the fourth student:");
var studen5 = prompt("Enter the fifth student:");//לעשות פרומפט אחד ואז פוש. עם לולאה
var students = [studen1, studen2, studen3, studen4, studen5,];

students.sort().join(", ").toLocaleLowerCase()//. להגדיר משתנה לגוינ וטו לוייר כייס 
console.log(students);


//כל עוד המתודה לו עושה שינוי לאריי- חייבים לתפוס אותו במשתנה
*/
var students = [];

for (var i = 0; i < 5; i++) {
  var student = prompt("Enter student " + (i + 1) + ":");
  students.push(student);
}
var students2= students.sort().join(", ").toLocaleLowerCase()
console.log(students2);