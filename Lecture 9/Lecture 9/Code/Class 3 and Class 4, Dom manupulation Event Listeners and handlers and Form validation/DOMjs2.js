//inline event listener

var addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click' , addNewStd);
var j = 1;
function addNewStd(e) {
    e.preventDefault();
    // console.log(e.target);
    console.log(j++ + " mouse clicked: name fuunction");
    
}


// addbtn.addEventListener('click', function name(params) {
//     params.preventDefault();
//     console.log("mouse clicked: name2");
// });

// addbtn.addEventListener('click', function(params) {
//     params.preventDefault();
//     console.log("mouse clicked: Anominous function");
// });

// addbtn.addEventListener('click', (params) => {
//     params.preventDefault();
//     console.log("mouse clicked: Arrow function " + t);
// });

// color picker


// Mouse Events


/*
function btnbutton(event) {
    
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    // console.log(event.target);
    // console.log(event.target.className);
    //console.log("X="+event.clientX + " \nY=" + event.clientY);
    // console.log("X="+event.clientX + " \nY=" + event.clientY);
    console.log("Button clicked name function");
    
}


var btnadd = document.getElementById("addbtn");

// btnadd.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("Button clicked Annonimous functoion");
// });


// btnadd.addEventListener('click', btnbutton);
btnadd.addEventListener('dblclick', btnbutton);

// btnadd.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log("Button clicked Arrow function");
// });
var box = document.getElementById("box");
box.addEventListener('mouseenter', overbox); // actual element
box.addEventListener('mouseleave', leavebox); //actual element
box.addEventListener('mousedown', overbox);
box.addEventListener('mouseup', leavebox);

box.addEventListener('mouseover', overbox);  //actual child
box.addEventListener('mouseout', leavebox);  // actual child

/*

box.addEventListener('mousemove', movebox);

function movebox(e) {
    
    var h = box.getElementsByTagName("h3")[0];
    // h.innerHTML = "X=" + e.x + "\nY=" + e.y;
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",0)";
    h.innerHTML = "X=" + e.offsetX + "\nY=" + e.offsetY;
    
}


function overbox(e) {
    console.log("Mouse over");   
}

function leavebox(e) {
    console.log("Mouse Leave");

}

/* KeyBpard Events */

var pname = document.getElementById('pname');

// pname.addEventListener('keypress',Keyevent1);
// pname.addEventListener('keydown', Keyevent1);
// pname.addEventListener('keyup', Keyevent2);

// form events

// pname.addEventListener('focus', Keyevent1);
// pname.addEventListener('blur', Keyevent2);
// select.addEventListener('change', Keyevent2);

pname.addEventListener('cut', Keyevent1);
pname.addEventListener('paste', Keyevent2);

// function Keyevent1(e){
    
//     e.target.style.backgroundColor = "#eee";
//     console.log("key press");
// }

// function Keyevent2(e) {
   
//     e.target.style.backgroundColor = "#fff";
//     console.log("key press");

// }

function Keyevent1(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "#eee";
    console.log("key press");
}

function Keyevent2(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "#fff";
    console.log("key press");
}

// window events
// window.onscroll = function (e) {
//     console.log("Hello worls scroll");
//     e.preventDefault();
//     console.log();
// }

// window.onresize = function (e) {
//     console.log("Hello worls resize");
//     e.preventDefault();
//     console.log(window.innerWidth);

// }