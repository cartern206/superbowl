window.onload = initAll;
src = "propsNU.js";
var usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else {
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  shuffle1(dataNU.props);

  for (var i = 0; i < 24; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;

  if (Math.random() >= 0.5) {
    document.getElementById(currentSquare).innerHTML = dataNU.props[thisSquare].Name + "<br />" + dataNU.props[thisSquare].A;
  } else {
    document.getElementById(currentSquare).innerHTML = dataNU.props[thisSquare].Name + "<br />" + dataNU.props[thisSquare].B;
  }
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}

function shuffle1(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
console.log(shuffle1(dataNU.props));
console.log(dataNU.props[0].Name);

