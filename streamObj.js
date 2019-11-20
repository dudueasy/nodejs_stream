const fs = require('fs');
const stream = require('stream');
const event = require('events');

const s = fs.createReadStream('./big_file.txt');


console.log(s);
console.log(stream);
console.log(event);



