
function validateform(){
var fname = document.getElementById('firstname').value 
var lname = document.getElementById('lastname').value 
var pass = document.getElementById('pass').value 
var cpass = document.getElementById('CP').value 
var email = document.getElementById('email').value

var fnameregex = /^[A-Za-z\s]{2,30}$/
var lastnameregex = /^[A-Za-z\s]{1,30}$/
var passregex = /^(?=. *\d)(?=. *[a-z])(?=. *[A-Z])(?=. *[!@#$%&*] )[0-9a-zA-Z]{8,}$/
var cpassregex =  /^(?=. *\d)(?=. *[a-z])(?=. *[A-Z])(?=. *[!@#$%&*] )[0-9a-zA-Z]{8,}$/
var emailregex = /^[A-Za-z0-9.-_%+]+@[a-zA-Z]+\.[a-z]{2,}$/

document.getElementById("firstnameerror").innerHTML = ""
document.getElementById("lastnameerror").innerHTML = ""
document.getElementById("passworderror").innerHTML = ""
document.getElementById("confirmpasserror").innerHTML = ""
document.getElementById("mailerror").innerHTML = ""

if(fnameregex.test(fname) !== true){
    document.getElementById("firstnameerror").innerHTML = "Firstname must contain alphabets and hyphens and be 2-30 characters"
    return false
}
if(lastnameregex.test(lname)!== true){
    document.getElementById("lastnameerror").innerHTML = "last name must conatin alphabets and be 1 to 30 characters"
    return false
}
if(passregex.test(pass) !== true){
    document.getElementById("passworderror").innerHTML = "Please enter valid password"
    return false
}
if(cpassregex.test(cpass) !== true){
    document.getElementById("confirmpasserror").innerHTML = "Password is not matched"
    return false
}
if(emailregex.test(email) !== true){
    document.getElementById("mailerror").innerHTML = "Enter valid email address"
    return false
}
window.location.href = "redirect.html"
return false
}




