const {Readable} = require('stream')

const customReadable = new Readable({
  read(size) {
    let i = 0;

    do{
      this.push(`${i}`)
      i++
    }
    while (i< 10)

    if(i>=10){
      this.push(null)
    }
  }
})


customReadable.pipe(process.stdout)
