var array = []
var num
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(num) {
  while (num >= 0) {
    num-=1
    console.log(num)
  }
  if(num = 0) {console.log('done')}
}

whileLoop(10)
