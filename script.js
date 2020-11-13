document.getElementById('my_button').addEventListener("click", displayText);

function displayText() {
  var arrayDa0a1000 = [];
  for (var i = 1000; i >= 0; i--) {
    arrayDa0a1000.push(i);
    document.getElementById('text').innerHTML = arrayDa0a1000;
  }
};
