const {Duplex} = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    this.queue.push(chunk);
    callback();
  },
  read(size) {
    if (this.limit === 0) {
      this.push('started\n');
    } else if (10 > this.limit > 0) {
      this.queue.length > 0 ? this.push(this.queue[this.queue.length - 1]) :
        this.push(this.limit.toString());
    } else {
      this.push(null);
    }
    this.limit += 1;
  },
});

duplexStream.limit = 0;
duplexStream.queue = [];

duplexStream.on('finish', () => {
  console.log('duplexStream is done writing');
});


duplexStream.on('end', () => {
  console.log('duplexStream is done reading');
});


process.stdin.pipe(duplexStream)
// duplexStream.pipe(process.stdout);

