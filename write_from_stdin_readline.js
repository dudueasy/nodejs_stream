const readline = require('readline')
const fs = require('fs')

const writable = fs.createWriteStream('./sink.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: writable
})


rl.on('line', (chunk) => {
  console.log(chunk)
  writable.write(chunk)
})
