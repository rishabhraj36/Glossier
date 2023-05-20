
function signin(){
    window.open("login.html");
}

var arr = JSON.parse(localStorage.getItem("signup-data")) || [];

function signup() {

    event.preventDefault();
    var firstname = document.getElementById("fname").value
    var lastname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (firstname == "" || lastname == "" || email == "" || password == "") {
        alert("Fill all the details")
    }
    else {
        var obj = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
        console.log(obj);
        const checkbox = document.getElementById("checkbox1");
        if(checkbox.checked == false)
       {
        alert("Please accept the Terms of Use and Privacy Policy");
       }
       else{
           arr.push(obj);
           localStorage.setItem("signup-data", JSON.stringify(arr));
           window.open("login.html");
        
       }
    }
}