const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (request, response) => {
  fs.readFile('./big_file.txt', {encoding: 'utf-8'}, (error, data) => {
    if (error) {
      throw error;
    }
    if (!error) {
      response.end(data);
      console.log('done');
    }
  });
});

const PORT = 8888;
server.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
