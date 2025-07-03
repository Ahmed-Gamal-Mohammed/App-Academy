/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1(){
    return 1;
}

// it return a promise (so when you call it you need to call it using .then)
/*
- whenever the (async) keyword is used, the function automatically returns a (promise) and the value 
  after the (return) keyword in the (async) function is resolved value of that returned (Promise).
  
*/
async function num2(){
    return 2;
// Even though you wrote return 2, JavaScript wraps it automatically in a Promise, like this: Behind the scenes
    // return Promise.resolve(2);

}

console.log('num1',num1());
console.log('num2',num2());
num2().then(result => console.log('num2',result));


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

/*

=> remember await is like saying: "Pause here and wait for the result before moving on."
=> It can only be used inside an async function.
=> It helps write asynchronous code in a way that looks like normal synchronous code (top to bottom).


- const value = await num2(); 
- like num2().then(value => {
    // Do something with value
  });
*/

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}

waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitForMyPromise() {
    const promise = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('done!!!');
        },1000)
    });

    const result = await promise;

    console.log('my promise is',result);
}

waitForMyPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('done!');
    },1500)
}).then(r => console.log('then my other promise is',r));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

const tryRandomPromise = (random) => new Promise((resolve,reject) =>{
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
})

for (let i = 1; i < 10; i++) {
    const random = Math.random();
    wait(2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) =>{
    const random = Math.random();

    // no need fro try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random * 1000);

    // usually you need to wrap the await to gracefully handle the error 
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i , result);
        
    } catch (error) {
        console.error('random again #', i, error);
    }
}

for (let i = 0; i < 10; i++) {
    tryTryAgain(i);    
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log("END OF PROGRAM");
