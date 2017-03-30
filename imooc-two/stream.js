const fs = require('fs');
const path = require('path');
var readStream = fs.createReadStream('copy.png');
var writeStream = fs.createWriteStream('copy1.png');

readStream.on('data',(chunk)=>{
    writeStream.write(chunk)
})
