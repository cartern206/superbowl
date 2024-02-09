window.onload = initAll
src = "propsNU.js"
var usedNums = new Array(76)

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard
    newCard()
  }
  else {
    alert("Your browser does not support this script.")
  }
}

function newCard() {
  shuffle1(data.props)

  for (var i = 0; i < 24; i++) {
    setSquare(i)
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare

  const propItem = data.props[thisSquare]

  const valuePrep = { ...propItem }
  delete valuePrep.Name
  const propChoices = Object.values(valuePrep)

  const diceRoll = Math.floor(Math.random() * (Object.keys(propChoices).length))

  document.getElementById(currentSquare).innerHTML = propItem.Name + "<br /><br /><b>" + propChoices[diceRoll] + "</b>"

}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false
  };

  newCard()
  return false
}

function shuffle1(array) {
  var m = array.length, t, i

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
console.log(shuffle1(data.props))
console.log(data.props[0].Name);

