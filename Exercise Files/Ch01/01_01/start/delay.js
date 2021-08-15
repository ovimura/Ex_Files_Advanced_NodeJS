// function delay(seconds, callback) {
//     setTimeout(callback, seconds*1000);
// }

// console.log('starting delays');

// delay(2, () => {
//     console.log('two seconds');
//     delay(1, () => {
//         console.log('three seconds');
//         delay(1, () => {
//             console.log('four seconds');
//         })
//     })
// })


var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {resolves('the long delay has ended')}, seconds*1000);
});


//delay(1).then((message) => console.log(message));
delay(1).then(console.log)
.then(() => 42)
.then((n) => console.log(`hello world: ${n}`));
