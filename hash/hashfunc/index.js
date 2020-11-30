module.exports = (inputStr) => {
  let h = 7n
  const letters = 'acdefgilnoprstuw'

  for (let i = 0;  i < inputStr.length; i++) {
    h = h * 37n + BigInt(letters.indexOf(inputStr[i]))
  }

  return h
}