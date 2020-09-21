const myform = document.getElementById("myform")
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");


// function errorChecker(){
//     if(fnamevalid() && lnamevalid() && phonevalid() && emailvalid()){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function fnamevalid(){
    if(!alphaOnly(fname)){
        return true;
    }
    else{
        return false;
    }
}

function lnamevalid(){
    if(!alphaOnly(lname)){
        return true;
    }
    else{
        return false;
    }
}

function phonevalid(){
    if(!phoneOnly(phone)){
        return true;
    }
    else{
        return false;
    }
}

function emailvalid(){
    if(!emailOnly(email)){
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

function alphaOnly(input){
    if(/^[a-zA-Z ]+$/.test(input.value)){
         goodInput(input);
         return true;
    }
    else{
        errorNote(input,"Only alphabets allowed here!");
        return false;
    }
}

function emailOnly(input){
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value)){
        goodInput(input);
        return true;
    }
    else{
        errorNote(input,"Please use the correct email format!");
        return false;
    }
}

function phoneOnly(input){
    if(/^[0-9 ]+$/.test(input.value)){
         goodInput(input);
         return true;
    }
    else{
        errorNote(input,"Only numbers allowed here!");
        return false;
    }
}

function dataTrans(){
   const fname1 = document.getElementById("fname").value;
   const mname1 = document.getElementById("mname").value;
   const lname1 = document.getElementById("lname").value;
   const address1 = document.getElementById("address").value;
   const phone1 = document.getElementById("phone").value;
   const email1 = document.getElementById("email").value;

   localStorage.setItem("FNAME",fname1);
   localStorage.setItem("MNAME",mname1);
   localStorage.setItem("LNAME",lname1);
   localStorage.setItem("ADDRESS",address1);
   localStorage.setItem("PHONE",phone1);
   localStorage.setItem("EMAIL",email1);

   return;
}

window.addEventListener("load", () =>{
    const fname1 = localStorage.getItem("FNAME");
    const mname1 = localStorage.getItem("MNAME");
    const lname1 = localStorage.getItem("LNAME");
    const comb = fname1.concat(" ",mname1," ",lname1);
    const address1 = localStorage.getItem("ADDRESS");
    const phone1 = localStorage.getItem("PHONE");
    const email1 = localStorage.getItem("EMAIL");

    document.getElementById("rname").innerHTML = comb;

    document.getElementById("raddress").innerHTML = address1;
    document.getElementById("rphone").innerHTML = phone1;
    document.getElementById("remail").innerHTML = email1;

})
