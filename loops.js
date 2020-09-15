var array = []

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    console.log(`\'I am ${i} strange loop${i === 0 ? '' : 's'}.'`)
  }
  return forLoop(i)
}
forLoop(array)
