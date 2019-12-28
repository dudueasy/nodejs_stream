const { Writable } = require('stream')

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.dir(chunk, {depth: null})
    console.log(chunk.toString())
    callback()
  }
})


process.stdin.pipe(outStream)

