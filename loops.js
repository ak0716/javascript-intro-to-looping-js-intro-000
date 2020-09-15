var array = []

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`\"I am ${i} strange loop${i === 1 ? '' : 's'}.\"`)
    console.log(`\"I am ${i} strange loop${i === 1 ? '' : 's'}.\"`)
  }
  return array
}
forLoop(array)
