var array = []

function forLoop(array) {
  for(let i = 1; i < 25; i++) {
    console.log(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
  }
}
forLoop(array)
