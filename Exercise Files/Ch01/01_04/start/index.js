var fs = require('fs');
var { promisify } = require('util');

// var delay = (seconds, callback) => {
//     if (seconds > 3) {
//         callback(new Error(`${seconds} seconds it too long!`));
//     } else {
//         setTimeout(() =>
//             callback(null, `the ${seconds} second delay is over.`),
//             seconds
//         );
//     }
// }

// delay(4, (error, message) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         console.log(message);
//     }
// });


// var promiseDelay = promisify(delay);

// promiseDelay(5)
// .then(console.log)
// .catch((error) => console.log(`error: ${error.message}`));

var writeFile = promisify(fs.writeFile);


writeFile('sample.txt', 'This is a sample')
.then(() => console.log('file successfully created'))
.catch(() => console.log('error creating file'));

