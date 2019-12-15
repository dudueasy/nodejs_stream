// const readline = require('readline');
const fs = require('fs');

const sink = fs.createWriteStream('./sink.js', {flags: 'w', encoding:'utf8'});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: sink
});

rl.on('line', (line) => {
  console.log(`line: ${line}`)
  sink.write(line)
})



