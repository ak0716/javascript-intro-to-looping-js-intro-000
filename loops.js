var array = []
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(num) {
  const num = 10
  while (num > 0) {
    console.log(num)
    num--
  }
  if(num = 0) {console.log('done')}
}
