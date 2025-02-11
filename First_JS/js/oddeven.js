function oddeven() {
    const num = document.getElementById('num').value;

    if (num % 2) {
        document.getElementById('message').innerHTML = "Odd";
    }
    else {
        document.getElementById('message').innerHTML = "Even";
    }

}