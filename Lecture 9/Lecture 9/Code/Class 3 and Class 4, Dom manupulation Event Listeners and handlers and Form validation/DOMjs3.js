var addbtn = document.getElementById("addbtn");
var addForm = document.getElementById("addForm");

var pname = document.getElementById("pname");
var id = document.getElementById("id");
var dept = document.getElementById("dept");

addForm.addEventListener('submit', addItem);

// analogue clock
function addItem(e) {

    e.preventDefault();

    var valid = validate();
    if (valid == false) {
        return;
    }
    else {
        var newStd = document.createElement("tr");

        newStd.innerHTML = "<td>" + pname.value + "</td>" +
            "<td>" + id.value + "</td>" +
            "<td>" + dept.value + "</td>";
        var td = document.createElement("td");

        var newbtn = document.createElement("button");
        newbtn.className = "delbtn";
        newbtn.innerText = "X";
        newbtn.addEventListener('click', delItem);
        td.setAttribute("align", "center");
        td.appendChild(newbtn);
        newStd.appendChild(td);


        var table = document.querySelector("#tab tbody");
        table.appendChild(newStd);
    }

}

var delbtn = document.querySelectorAll(".delbtn");
// delbtn.addEventListener('click', delItem);

for (let i = 0; i < delbtn.length; i++) {
    delbtn[i].addEventListener('click', delItem);
}


function delItem(e) {
    console.log(this.parentElement.parentElement);
    var table = document.querySelector("#tab tbody");
    table.removeChild(this.parentElement.parentElement);

}

function validate() {

    var depts = ["CSE", "MCE", "EEE", "TVE"];

    var warning = document.getElementById("warning");

    if (pname.value == "" || id.value == "" || dept.value == "") {

        warning.style.visibility = "visible";
        return false;
    }
    else if (1) {
        var ch = 0;
        for (let i = 0; i < depts.length; i++) {
            if (depts[i].toLocaleLowerCase() == dept.value.toLocaleLowerCase()) {
                ch = 1;
                break;
            }
        }
        if (ch == 0) {
            warning.innerText = "The Department is wrong";
            warning.style.visibility = "visible";
            return false;
        }

    }
    else {
        return true;
    }
}

















/* function validate(e) {
    // e.preventDefault();
    var sname = document.getElementById("pname");
    var sid = document.getElementById("id");
    var dept = document.getElementById("dept");
    var warning = document.getElementById("warning");
    if (sname.value == "" || sid.value == "" || dept.value == ""){
        warning.style.visibility = "visible";
        return false;
    }
    else{
        var newtr = document.createElement("tr");
        // console.log(newtr);
        var newtd_name = document.createElement("td");
        var newtd_id = document.createElement("td");
        var newtd_dept = document.createElement("td");
        var newtd_delbtn = document.createElement("td");
        var del = document.createElement("button");
        del.className = "delbtn";
        del.innerText ="X";

        newtd_name.textContent = sname.value;
        newtd_id.textContent  = sid.value;
        newtd_dept.textContent  = dept.value;

        newtd_delbtn.appendChild(del);
        // newtd_delbtn.innerHTML ="<button class='delbtn'>X</button> ";
        newtd_delbtn.setAttribute("align","center");

        newtr.appendChild(newtd_name);
        newtr.appendChild(newtd_id);
        newtr.appendChild(newtd_dept);
        newtr.appendChild(newtd_delbtn);

        del.addEventListener('click',delItem);

        var tab = document.querySelector("#tab tbody");
        tab.appendChild(newtr);

        sname.value = "";
        sid.value = "";
        dept.value = "";

        console.log(newtr);
        return false;
    }

}


// Delete
delme.forEach(function(btn) {
    btn.addEventListener('click', delItem);
});

function delItem(e){
   e.preventDefault();
   console.log(e.target);

    var tab = document.querySelector("#tab tbody");
    tab.removeChild(e.target.parentElement.parentElement);



}
*/