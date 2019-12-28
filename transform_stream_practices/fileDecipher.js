const fs = require('fs');
const {decipherStream} = require('./decipherStream');


function decipherFile(filename, outputName) {

  console.log(filename, outputName);

  fs.createReadStream(filename)
    .pipe(decipherStream)
    .pipe(fs.createWriteStream(outputName));
}

console.log(process.argv);
decipherFile(process.argv[2], `${process.argv[2]}.decryped`);

