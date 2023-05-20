
function createNewAccount(){
    window.open("signup.html");
}
var arr = JSON.parse(localStorage.getItem("signup-data")) || [];
function login() {

    event.preventDefault();
    // console.log(arr)
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var flag = 0;
    arr.map(function (elem) {
        if (elem.email == email && elem.password == password) {
            flag = 1;
            var logedInfname = elem.fname;
            var logedInlname = elem.lname;
            var checkLogin = true;
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
            // localStorage.setItem("logedInfname ", JSON.stringify(logedInfname));
            // localStorage.setItem("logedInlname ", JSON.stringify(logedInlname));
            window.open("index.html");
        }
    })
    if (flag == 1) {
        // document.getElementById("heading").textContent="Sign in Successful";
        alert("Sign in Successful");
    } else {
        alert("Wrong Credentials")
    }

}