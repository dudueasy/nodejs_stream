const crypto = require('crypto');
const {algorithm} = require('./cipherConst');
const {password} = require('./cipherConst');

let cipherStream = crypto.createCipher(algorithm, password);

module.exports = {cipherStream};
