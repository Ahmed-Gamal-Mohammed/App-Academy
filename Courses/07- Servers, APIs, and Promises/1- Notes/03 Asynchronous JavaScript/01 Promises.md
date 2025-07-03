# **What is a Promise?**
A **promise** in JavaScript is a special object used to handle **asynchronous operations**, like fetching data from the internet or reading a file. Instead of getting the result right away, the promise acts like a placeholder — it promises to give you the result **later**.
# Why Promises 
## The Problem 
Sometimes we need to chain several asynchronous functions. For example, maybe we want to get our user's geolocation, then hit an API to `GET` the user's nearest surf spot, then hit a third API to get the surf conditions for that spot.
```JS
function getForecastForLocation(){
  locationRequest({
    success: spotRequest({
      success: forecastRequest({
        success: handleSuccess,
        error: handleError
      }),
      error: handleError
    }),
    error: handleError
  });
}
```
We would have to define the success callback of one function to invoke the next, and each would have to handle its own errors. Nesting callbacks like this can only lead us to :fire: callback hell :fire: .
## The Solution 
With promises we can  write:
```JS
function getForecastForLocation(){
	locationRequest()
	.then(spotRequest)
	.then(forecastRequest)
	.then(handleSuccess)
	.catch(handleError)
}
```
## Functionality and Vocabulary
First Let's define a couple terms:
- **Action**: This means **what the promise is trying to do** — for example, "fetch data from an API".

**Promises can exist in one of three states:**
- *pending:* The promise is still doing the action.
	- (Example: It’s still trying to fetch the data.)
	
- _fulfilled_: The action **succeeded** — the data was fetched successfully.

- _rejected_: The action **failed** — maybe the server couldn’t be reached or something went wrong.


A promise is considered **settled** when it has either been fulfilled or rejected.
- Once a promise is either fulfilled or rejected, it is said to be **settled**. It means it’s done and won’t change anymore.

***A few notes about functionality before moving on:***
- *A Promise can only succeed or fail once --* Callbacks will not be invoked multiple times 
	-  A promise can **only succeed or fail once**.  
    - (Example: If it succeeds, it won’t fail later — and vice versa.)

- *A Promise cannot change its state from fulfilled to rejected or vice-versa*
	- Once a promise is fulfilled or rejected, its state is **locked**. It won’t switch from "fulfilled" to "rejected" later.
	
- *If a promise has already been settled and callback is added that matches the promises's state, that callback will be invoked immediately*
	- Even if the promise has already been settled, if you add a `.then()` (for success) or `.catch()` (for error) **after it’s done**, it will still **run your callback immediately** with the result.

## Creating a Promise
We can create a new promise using the promise constructor function 

```js
const p = new Promise(executor);
```

The constructor function accepts a single `executor` argument, which is a function that takes two optional parameters: `resolve` and `reject`

```JS
const p = new Promise((resolve,reject) =>{
	if(err){
		reject(err); // it takes any args
	}else{
		resolve(); // it takes any args
	}
});
```

we can create a separate function like the following and pass it 
```node.js

function executor(resolve,reject){
	if(err){
		reject(err);
	}esle{
		resolve();
	}
}

function res1(){
	console.log("Iam a resolve1 Fucntion");
}

function res2(){
	console.log("Iam a resolve2 Fucntion");
}

function res3(){
	console.log("Iam a resolve3 Fucntion");
}

function rej(){
	console.log("Iam a reject function");
}

const n_Promise = new Promise(executor);

n_Promise.then(res1)
		 .then(res2)
		 .then(res3)
		 .catch(rej); 
```
## `Resolve` and Reject
`Resolve` and `Reject` are responsible for telling the promise what argument to pass on once the promise has been settled. 

```js

const request = new Promise(resolve =>{
	setTimeout((msg) => resolve(msg) ,1000);
});

const receiveResponse = msg => console.log(msg);

request.then(receiveResponse);
```

`receiveResponse` is the resolve callback, and will be invoked once `setTimeout` successfully goes off after one second. It receives an argument which will get passed to the resolve callback, which in this case prints it out 
## then 
Promise objects have two important pre-defined methods: `then` and `catch`. Both `then` and `catch` return **a new promise object**, making them chainable.

**Chainable:** *Means that the next then can take the previous return promise*

`then` accepts two parameters:

- `onFulfilled`: the function to invoke if the promise is _fulfilled_
- `onRejected`: the function to invoke if the promise is _rejected_

Essentially, `onFulfilled` is the `resolve` function and `onRejected` is the `reject` function.
```js
p.then(onFulfilled) // onFulfilled *might* run
p.then(onFulfilled, onRejected) // either onFulfilled or onRejected *will* run
```
## catch 
`catch` only accepts an `onRejected` parameter. `catch` acts exactly like calling `then(null, onRejected)` on a promise.

Consider this:
```js
p.then(onFulfilled, onRejected).catch(error)
```
If `p` is rejected, `onRejected` will run. `error` will run if either `onFulfilled` or `onRejected` are rejected.

Note: `onRejected` simply logging an error message would not trigger `error`, but it would if it explicitly threw an error. In other words:
```js
const onRejected = err => console.log(err); // fulfilled; would not trigger error

const onRejected = err => throw err; // rejected; would trigger error
```
## Using Promises

While promises can be a little tricky to understand, they are extremely easy to use. The jQuery `ajax` method allows use of success callbacks and also returns a `jqXHR` object, which can be used like a promise. We can avoid passing a callback to `ajax` by calling `then` on the return value and passing the callback to `then`.

// Passing a callback
```js
const fetchSuccess = cat => console.log(cat);
const fetchError = err => console.log(err);

const fetchCat = (catId, success, error) => (
  $.ajax({
    url: `/cats/${catId}`,
    success,
    error
  })
);

fetchCat(1, fetchSuccess, fetchError);
```
// Using a promise.
```js
const fetchSuccess = cat => console.log(cat);
const fetchError = err => console.log(err);

const fetchCat = catId => $.ajax({ url: `/cats/${catId}` });
// Note the implicit return!

fetchCat(1).then(fetchSuccess).fail(fetchError);
```

Note how we use `fail` instead of `catch`! That's because the `jqXHR` object has a slightly different set of methods than a standard promise. `then` behaves like we'd expect, but we use `fail` to handle errors. We also have access to `done`, which only takes a success callback, and `always`, which runs its callback upon the promise being settled, no matter what.

Promises really excel at error handling and separating concerns. In the second example, the `fetchCat` function no longer needs to be involved with or know about the expected outcome.
# Promises
Before Promises, developers handled asynchronous code using callbacks (i.o functions passed into other functions to run later ). This work.. but it quickly becomes messy when: 
- You need to handle many asynchronous operations 
- you want to know when all of them are complete 
- You want to handle errors properly 
**The messy situation is often called _Callback hell_**
