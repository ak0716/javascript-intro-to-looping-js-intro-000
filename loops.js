var array = []
var num = 10
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num)
    num--
  }
}
