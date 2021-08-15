const { Resolver } = require('dns');
var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

// const doStuffSequentially = () => Promise.resolve()
//   .then(() => console.log('starting'))
//   .then(() => delay(1))
//   .then(() => 'waiting')
//   .then(console.log)
//   .then(() => delay(2))
//   .then(() => writeFile('file.txt', 'Sample File...'))
//   .then(beep)
//   .then(() => 'file.txt created')
//   .then(console.log)
//   .then(() => delay(3))
//   .then(() => unlink('file.txt'))
//   .then(beep)
//   .then(() => 'file.txt removed')
//   .then(console.log)
//   .catch(console.error);

// doStuffSequentially()
//   .then(() => console.log('again again!!!'))
//   .then(() => doStuffSequentially())
//   .then(() => console.log('enough already...'));

const doStuffSequentially = async () => {
  console.log('starting');
  await delay(1);
  console.log('waiting');
  await delay(2);
  try {
    await writeFile('file.txt', 'Sample File...');
    beep();
  } catch(error) {
    console.error(error);
  }
  console.log('file.txt created');
  await delay(3);
  await unlink('file.txt');
  console.log('file.txt removed');
  return Promise.resolve();
}

// doStuffSequentially();

// readdir.then((files) => {
  
// });

async function start() {
  var files = await readdir(__dirname);

  console.log(files);
}

start();