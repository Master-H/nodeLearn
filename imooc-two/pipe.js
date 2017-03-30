const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream('dif.png');
// const writeStream = fs.createWriteStream('dif1.png');
const writeStream = fs.createWriteStream(path.join(__dirname,'dif2.png'));
readStream.pipe(writeStream)