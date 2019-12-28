const crypto = require('crypto');
const {password, algorithm} = require('./cipherConst');

const decipherStream = crypto.createDecipher(algorithm, password);

module.exports = {decipherStream};
