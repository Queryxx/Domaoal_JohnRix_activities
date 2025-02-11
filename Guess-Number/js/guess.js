function checkguess(){
    const guess = document.getElementById('guess').value;
    const ans = document.getElementById('ans');
    if (guess == 12) {
      ans.innerHTML = "You got the correct answer";
    }
    else {
        ans.innerHTML = "Wrong Number";
    }
}