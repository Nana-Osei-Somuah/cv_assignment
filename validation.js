
const myform = document.getElementById("myform");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");


function errorChecker(){
    const fname = document.getElementById("fname").value;
    if(/^[a-zA-Z ]+$/.test(fname) === false){
        alert("'First name' allows Only alphabets!");
        return false;
    }

    const lname = document.getElementById("lname").value;
    if(/^[a-zA-Z ]+$/.test(lname) === false){
        alert("'Last name' allows Only alphabets!");
        return false;
    }    

    const phone = document.getElementById("phone").value;
    if(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone) === false){
        alert("'Phone Number' allows Only numbers!");
        return false;
    } 

    const email = document.getElementById("email").value;
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === false){
        alert("Please use the correct email format!");
        return false;
    } 
    return errorChecker();
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


