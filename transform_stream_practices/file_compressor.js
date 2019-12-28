const fs = require('fs');
const zlib = require('zlib');


function file_compressor(fileName, outputPath) {
  fs.createReadStream(fileName)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(`${ outputPath }.gz`));
}

// module.exports = file_compressor;

const fileName = process.argv[2]
file_compressor(fileName, fileName)
