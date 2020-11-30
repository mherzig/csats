const hashFunc = require('../hashfunc')

module.exports = (hashed, numChars) => {
  const letters = 'acdefgilnoprstuw'
  let inputStr = ''
  let current = 0

  const buildTestString = () => {
    let str = inputStr + letters[current]
    while (str.length < numChars) {
      str += letters[0]
    }
    return str
  }
  
  // we'll add to the input string as we go
  while (inputStr.length < numChars) {
    current = 0

    while (current < letters.length && hashFunc(buildTestString()) <= hashed) {
      current++
    }

    inputStr += letters[current - 1]
  }

  if (hashFunc(inputStr) === hashed) {
    return inputStr
  }
  
  throw Error(`Could not find valid input string for ${hashed}`)
}