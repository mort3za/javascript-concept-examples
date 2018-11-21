/* Variable declerations (not variable initialization) in functions automatically goes to top in JavaScript */

var name = 'Rostam'
function showName(){
  console.log('Initial Name:', name)
  var name = 'Esfandiar'
  console.log('New Name:', name)
}

showName()

// Initial Name: undefined
// New Name: Esfandiar
