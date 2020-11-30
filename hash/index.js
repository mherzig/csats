const argv = require('minimist')(process.argv.slice(2), {
  string: '_'
})
const findHash = require('./findhash')

const MIN_CHARS = 1
const MAX_CHARS = 16

let hashResult

const showHelp = (msg) => {
  console.error(msg)
  console.info('USAGE: node index.js -c7 1234567890')
  process.exit(1)
}

if (!argv._.length) {
  showHelp('Must include the hash result as an argument.')
}

try {
  hashResult = BigInt(argv._[0])
} catch (ex) {
  showHelp('Hash result must be a 64-bit integer.')
}

if (argv.c == undefined) {
  showHelp('Must include the number of characters as an argument.')
}

const numChars = argv.c
if (isNaN(numChars) || numChars < MIN_CHARS || numChars > MAX_CHARS) {
  showHelp(`Number of characters in the original string must be an integer between ${MIN_CHARS} and ${MAX_CHARS}.`)
}

try {
  const inputStr = findHash(hashResult, numChars)
  console.log('INPUT STRING: ' + inputStr)
} catch (ex) {
  showHelp(ex.toString())
}

process.exit(0)