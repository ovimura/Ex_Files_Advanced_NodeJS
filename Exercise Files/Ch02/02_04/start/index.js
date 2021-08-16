const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
    //console.log('size: ', chunk.length);
    writeStream.write(chunk);
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    //console.log('done!');
    writeStream.end();
});


writeStream.on('close', () => {
    process.stdout.write('file copied\n');
})