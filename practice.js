// create a promise for event listeners.

// const button = document.querySelector("button")
// function eventpromise(element, click){
//     return new Promise((resolve, reject)=>{
//         element.addEventListener(click, resolve)
//     })
// }
// eventpromise(button, "click").then(e=>{
//     console.log("clickedd");
//     console.log(e);
// })
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });

function newfunction(duration){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("hello there.");
        }, duration)
    })
}
async function hell(){
    console.log("result will be printed soon");
    await newfunction(2000)
}
hell();