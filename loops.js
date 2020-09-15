var array = []

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    console.log(`\'I am ${i} strange loops\'`)
  }
  return forLoop(array)
}
forLoop(array)
