// "use strict";
// Dom manupulation
// Event Listeners and handlers
// Form validation

/* Parents */

var form1 = document.getElementById("addForm");

console.log(form1);

//console.log(fm[3]);

// var form2 = document.querySelector("#addForm");

// console.log(form1.parentElement);
// console.log(form1.parentNode);

// form1.style.backgroundColor = "red";
console.log(form1.children);

console.log(form1.previousElementSibling);
// console.log(form1.getElementsByTagName("input"));

// var newdiv = document.createElement("div");
// newdiv.innerHTML = "<h3>THis is a test</h3>";
// // newdiv.textContent = "<h1>THis is a test</h1>";
// newdiv.id = "add";

// newdiv.className = "Hello he";
// newdiv.classList = "Hello he";
// newdiv.setAttribute('title', 'this is a ltitle');

// console.log(newdiv);
// var section = document.getElementById('content');

section.appendChild(newdiv);

// section.insertBefore(newdiv, form1);
// // section.insertAfter(newele); jqry

// // console.log(newele.className);
// // console.log(section);

// section.removeChild(newdiv);

// console.log(frm.parentNode);
// console.log(frm.parentElement);
// console.log(frm.parentElement.parentElement.parentElement);

/* Children */
var tab = document.querySelector("table tbody");
// console.log(tab.childNodes);
// console.log(tab.children);
// console.log(tab.firstChild);
// console.log(tab.firstElementChild);

// //same
// console.log(tab.lastChild);
// console.log(tab.lastElementChild);

// tab.firstElementChild.style.backgroundColor = "yellow";
// tab[3].style.backgroundColor = "red";

/* Sibblings */
var tr = document.querySelector("table tbody tr:first-child");
// console.log(tr.nextElementSibling);
// console.log(tr.previousElementSibling);

// tr.nextElementSibling.style.backgroundColor = "blue";

/* Create Elements*/

var newele = document.createElement("div");

// newele.className = "Hello";
// newele.id = "test";

// newele.setAttribute("title","This is a div");
// var text = document.createTextNode("Hello world created div");
// newele.appendChild(text);

// var main = document.getElementById("content");

// newele.classList.add("newdiv");
// main.appendChild(newele);

// var form = document.getElementById("tab");
// main.insertBefore(newele, form);
// //main.insertAfter(newele); jqry
// console.log(newele.className);
