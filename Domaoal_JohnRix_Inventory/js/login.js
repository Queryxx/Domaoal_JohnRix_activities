function checkUser() {
    const uname = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (uname == myuser && password == mypass){
        document.getElementById('message').innerHTML = "Login successfully";
    }
    else{
        document.getElementById('message').innerHTML = "Invalid Username or Password   ";
    }
}