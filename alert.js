function validateform(){
    var fname = document.getElementById('firstname').value 
    var lname = document.getElementById('lastname').value 
    var pword = document.getElementById('password').value
    var email = document.getElementById('email').value
    var DOB = document.getElementById('date of birth').value
    var mobilenumber = document.getElementById('phonenumber').value

    var fnameregex = /^[A-Za-z-]+$/
    var lnameregex = /^[A-Za-z-]+$/
    var pwordregex = /^[A-Za-z-_!#%&*+@]{8,20}$/
    var emailregex = /^[A-Za-z_.-!#$%&*]+@[a-z]+\.[a-z]+$/
    var DOBregex = /^\d{2}\-\d{2}\-\d{4}$/
    var mobregex = /^\+[789][0-9]{9}$/

    if(!fnameregex.test(fname)){
        alert("Invalid firstname.please enter valid firstname")
        return false
    }
    if(!lnameregex.test(lname)){
        alert("Invalid lastname.please enter valid last name")
        return false
    }
    if(!pwordregex.test(pword)){
        alert("Invalid password.password should contain uppercase,lowercase,any special characters and it contain 8 to 20 characters")
        return false
    }
    if(!emailregex.test(email)){
        alert("Invalidpassword")
        return false
    }
    if(!DOBregex.test(DOB)){
        alert("enter valid DOB")
        return false
    }
    if(!mobregex.test(mobilenumber)){
        alert("Your mobilenumber is not correct")
        return false
    }
    else{
        window.location.href="redirect.html"
        return false
    }
}