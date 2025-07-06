# Classic promise example 
```node.js

function walkTheDog(){
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			resolve('happy dog');
		},1000);
	});
}

function doChores(){
	console.log('before walking the dog');
	walkTheDog()
	.then(res =>{
		console.log(res);
		console.log('after walking the dog');
	});

	return 'done';
}

console.log(doChores());

// prints:
//

// before walking the dog
// done
// happy dog
// after waling the dog
```

# `async`function declarations
Declaring a function with `async` will create the function so it returns an implicit promise containing it's result.
```node.js
async function doChores(){
	// ....
	return 'done';
}
console.log(doChores());

// prints:
// promise{'done'};
```
This function now returns a promise automatically! `Notice` that the promise returned contains the immediately resolved value of `done` 
An `async` declaration isn't super useful by itself. However, it allows us to utilize the `await` keyword inside the function.

# `(await)`ing  a promise 
- The `await` operator can be used to wait for promise to be fulfilled. 
- We are only allowed to use `awiat` in `async` function 
- Using `awiat` outside of a `async` will result in a *SyntaxError*
- When a promise is `awiat` ed, execution of the containing `async` function will pause until the promise is fulfilled 

```js
function walkTheDog(){
	return new Promise((resolve,reject) =>{
		setTimeout(() =>{
			resolve('happy dog');
		},1000);
	})
}

async function doChores(){
	console.log("before walking the dog");

	const res = await walkTheDog();

	console.log(res);
	console.log("after walking the dog");
}

doChores();

// prints 
// before walking the dog
// happy dog
// after walking the dog
```

Remember that the `async doChores` function will implicitly return a promise. Now that promise will fulfill once the entire function is finished executing. The function's return value will be the resolved value of the implicit promise. Let's handle it with `then`:

```node.js
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}

async function doChores() {
  console.log('before walking the dog');
  const res = await walkTheDog();
  console.log('after walking the dog');
  return res.toUpperCase();
}

doChores().then(result => console.log(result));
// prints:
// before walking the dog
// after walking the dog
// HAPPY DOG
```

You're probably wondering why we chain `then` and not simply use `await doChores()`, that's because we can only use `await` _inside_ of an `async` function. Currently our call to `doChores` is not within any function.

For fun, let's use a surrounding `async` function to `await doChores()`. We'll also add some numbered print statements to show the order of execution:

```js
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2');
      resolve('happy dog');
    }, 1000);
  });
}

async function doChores() {
  console.log('1');
  const res = await walkTheDog();
  console.log('3');
  return res.toUpperCase();
}

async function wrapper() {
  console.log('0');
  const finalResult = await doChores();
  console.log('4');
  console.log(finalResult + '!!!');
}

wrapper();
// prints:
// 0
// 1
// 2
// 3
// 4
// HAPPY DOG!!!
```
# Refactoring a promise chain 
Refactoring a promise chain is straightforward with `async`/`await`. Let's say wanted to print the resolved values for 3 promises in order:
```Js
function wrapper(){
	promise1
	 .then(res1 =>{
		 console.log(res1);
		 return promise2;
	 })
	 .then(res2 =>{
		 console.log(res2);
		 return promise3;
	 })
	 .then(res3 =>{
		 console.log(res3);
	 });
}
```

We can refactor it into this:

```js
async function wrapper(){
	console.log(await promise1);
	console.log(await promise2);
	console.log(await promise3);
	console.log(await promise4);
}
```

# Error Handling 
Since `async` / `await` allows for seemingly synchronous execution, we can use a normal `try...catch` pattern to handle errors when the promise is rejected:

```Js
function action(){
	return new Promise((resolve,reject) =>{
		setTimeout(() =>{
			reject('uh-oh'); // rejected
		},3000);
	});
}

async function handlePromie(){
	try{
		const res = await action();
		console.log('resolved with', res);
	}catch(err){
		console.log('rejected becasue of',err);
	}
}

handlePromise();
// prints:
// rejected because of : uh-oh
```
