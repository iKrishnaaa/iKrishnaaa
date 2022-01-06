// this is the callback promises and inorder to understand this you nee
// you need to improve your skills to show them to gaurav umrani that you
// worth in this company and able to answer all your coding question and 


/*
and please type your code cause you understand what are you doing cause 
if you are unbable to wright your code you will be not worth in a complany 
and inorder to earn a better you and to get a better salary you need to
improve you coding skills to the next level.
*/
setTimeout(() => {
    console.log("this will output after 5sec");
}, 10000);

const button = document.querySelector('button')
button.addEventListener('click', ()=> {
    console.log("Event Listeners")
})

// Promises in javascript in order to complete the promise

const promise = new Promise((resolve, reject)=>{
    const sum = 1+1;
    if(sum === 2 ){
        resolve("success");
    }else {
        reject("error")
    }
})
promise.then(message =>{
    console.log(message)
})
.catch(message =>{
    console.error(message);
})
