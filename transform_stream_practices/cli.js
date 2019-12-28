const file_compressor = require('./file_compressor')
const readline = require('readline');

const commandHash =  {
  'compress': file_compressor
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  console.log(line);
})

const cli = () => {

}



cli()
