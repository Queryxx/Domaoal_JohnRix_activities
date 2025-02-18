function checkNumber() {

  const num = document.getElementById('guess').value;
  tri--;
  t++;
  if (num == random) {
    document.getElementById('message').innerHTML = "Correct";
  }
  else {
    if (num < random) {
      document.getElementById('message').innerHTML = "Higher";
    }
    else if (num > random) {
      document.getElementById('message').innerHTML = "Lower";
    }
  }
  if (tri < 0) {

    document.getElementById('tries').innerHTML = "You dont have remaining tries";
    alert("You dont have remaining tries");
  }
  else {
    document.getElementById('tries').innerHTML = "Tries " + tri;
  }
  if (num == random) {
    tri++;
    t--;
    document.getElementById('tries').innerHTML = "Congrats, you tried " + t + " tries to guess";
  }

}