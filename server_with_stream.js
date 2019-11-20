const http = require('http')
const fs = require('fs')


const server = http.createServer()

server.on('request', (request, response)=> {
  const stream = fs.createReadStream('./big_file.txt')
  stream.pipe(response)
  stream.on('end', ()=> {
    console.log('done')
  })
})

const PORT = 8888

server.listen(PORT , ()=> {
  console.log(`server is running on: ${PORT}`)
})
