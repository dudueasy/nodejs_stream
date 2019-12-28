const {cipherStream} = require('./cipherStream');

const fs = require('fs');
const zlib = require('zlib');
const {Transform} = require('stream');
const crypto = require('crypto');
const {password, algorithm} = require('./cipherConst');


const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  },
});


function file_compressor(fileName, outputPath) {


  fs.createReadStream(fileName)
    .pipe(cipherStream)
    .pipe(reportProgress)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(`${outputPath}.gz`));
}


// module.exports = file_compressor;

const fileName = process.argv[2];
file_compressor(fileName, fileName);
