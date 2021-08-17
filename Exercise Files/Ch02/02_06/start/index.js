const { createReadStream, createWriteStream } = require('fs');

//const readStream = createReadStream('../../powder-day.mp4');
//const writeStream = createWriteStream('./copy.mp4');
const writeStream = createWriteStream('./file.txt');

//readStream.pipe(writeStream).on('error', console.error);

process.stdin.pipe(writeStream);


