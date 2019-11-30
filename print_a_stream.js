const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', async (request, response)=> {
  const readableStream = fs.createReadStream('./big_file.txt')
  const writableStream = fs.createWriteStream('./writable.txt')

  let count = 0;

  writableStream.on('drain',() => {
    console.log('writableStream is drained');
  })

  writableStream.on('finish', () => {
    console.log('writableStream is finished');
  })

  readableStream.on('data', async (chunk)=> {
    count ++;
    writableStream.write(chunk)
    // console.log(`read ${count} times.`)
    // console.log(chunk.toString());
  })

  readableStream.on('end', () => {
    console.log(`read ${count} times totally.`);
  })

  readableStream.on('close', () => {
    console.log(`stream is closed`);
  })

  readableStream.pipe(response)
})

const PORT = 9999
server.listen(PORT, () => {
  console.log(`server is listening ${PORT}`);
})

