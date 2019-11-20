const fs = require('fs');
const readableStream = fs.createReadStream('./big_file.txt');
const writableStream = fs.createWriteStream('./sink.txt')

let i = 0;
readableStream.on('data', (chunk) => {
  writableStream.write(chunk)

});

// readableStream.on('end', ()=>{
//   // 可读流读取完毕时, 也要关闭可写流
//   writableStream.end()
//   console.log('可读流读取完毕')
// })


readableStream.pipe(writableStream)
