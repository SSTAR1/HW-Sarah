//var div = document.getElementsByClassName("text");
//div.class.color = prompt("write the color of the text:");


//the right way to write:
var div = document.getElementById("myDiv");
var newColor = prompt("write the color of the text").toLocaleLowerCase();
div.style.color = newColor;