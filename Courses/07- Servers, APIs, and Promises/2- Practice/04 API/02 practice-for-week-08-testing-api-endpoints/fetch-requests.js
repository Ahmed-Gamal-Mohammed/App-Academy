/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here

fetch('./posts')
  .then(res => res.json())
  .then(resBody => console.log(resBody));

(async function() {
  const res = await fetch('./posts');
  const body = await res.json();
  
  console.log(body);
})();
/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
const options = {
  method: "POST",

  body: JSON.stringify({
    message: "New Post!!!"
  }),

  headers: {
    "Content-Type": "application/json"
  }
};

(async function() {
  let resObj = await fetch("/posts", options);
  let resBody = await resObj.json();
  console.log(resBody);
})()