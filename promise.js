// this is how promise works in javascript
const promise = new Promise((resolve, reject)=>{
// this is the synchronous code though i would be writing an a synchronous fn.   
    let sum = 2;
    if (sum ===2){
        resolve("success")
    }else{
        reject("rejected")
    }
})
promise.then(message =>{
    console.log("successs Promise this is how promise is resolved.")
}).catch(message => {
    console.log("rejected promise.")
})


// setTimeout(() => {
//     console.log("new promise")
// }, 250);

// settimeoutnew(2000).then(()=>{
//     console.log("succes promise.");
// })
// function settimeoutnew(duration){
//     return new Promise((resolve, reject)=>{
//      setTimeout(resolve, duration)
//     })
// }
setTimeout(() => {
    console.log("litttt");
}, 5000);

async function dowork(){
    try{
        await setTimeout()
        console.log("this is an async await function");
    }
    catch{
        console.log("there has been an error");
    }
    
}
dowork()














// newfunction(200)
// .then(()=>{
//     console.log("1");
//     return newfunction(200)
// })
// .then(()=>{
//     console.log("2");
//     return newfunction(200)
// })
// .then(()=>{
//     console.log("3");
//     return newfunction(200)
// })
// .then(()=>{
//     console.log("4");
// })
// function newfunction(duration){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, duration)
//     })
// }



