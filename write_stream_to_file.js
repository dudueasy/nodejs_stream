const fs = require('fs');

let stream = fs.createWriteStream('big_file.txt', {flags: 'w'});

for (let i = 0; i < 1000000; i++) {
  stream.write(`这是第${i}行文字\n`);
}

stream.end()
console.log('done')
