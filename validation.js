const myform = document.getElementById("myform")
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");

function fnamevalid(){
    if(noInput(fname)) return;

    if(!alphaOnly(fname)){
        return true;
    }
    else{
        return false;
    }
}

function lnamevalid(){
    if(noInput(lname)) return;

    if(!alphaOnly(lname)){
        return true;
    }
    else{
        return false;
    }
}

function noInput(input){
    if(empty(input.value)){
        errorNote(input,"Please fill here")
        return true;
    }
    else{
        goodInput(input);
        return false;
    }
}

function empty(data){
    if(data===""){
        return true;
    }
    else{
        return false;
    }
}

function errorNote(input, note){
    input.className = "error";
    input.nextElementSibling.innerHTML = note;
    input.nextElementSibling.color = red;
}

function goodInput(input){
    input.className = "good";
    input.nextElementSibling.innerHTML ="";
    input.nextElementSibling.color = green;
}

alphaOnly(input){
    if(/^[a-zA-Z] + $/.test(input.value)){
         goodInput(input);
         return true;
    }
    else{
        errorNote(input,"Only alphabets allowed here!");
        return false;
    }
}