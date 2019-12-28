const {Readable} = require('stream')

const inStream = new Readable()

// 向可读流推数据
inStream.push('ABCDEFGHIJKLM')
inStream.push('NOPQRSTUVWXYZ')
inStream.push(null)



// inStream.pipe(process.stdout)

// 等同于
inStream.on('data', (chunk) => {

  console.dir(chunk, {depth: null})
  process.stdout.write(chunk)
  console.log('11')
})

