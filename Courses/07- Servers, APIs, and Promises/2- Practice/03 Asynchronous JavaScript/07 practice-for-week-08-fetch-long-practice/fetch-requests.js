/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/*

fetch(url, {
  method,
  body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

*/

/* ============================== Phase 1 ============================== */

// Your code here

// const URL  = './products';
// const header = {"Content-Type": "application/x-www-form-urlencoded"};
// const body = new URLSearchParams({
//     name: "Caribbean Delight Coffee",
//     description: "Made by Manatee Coffee",
//     price: 11.99,
//     categories: "grocery"
// });
// const options = {
//     method: "POST",
//     headers : header,
//     body: body
// }

// fetch(URL,options);

// or 
fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

/* ============================== Phase 2 ============================== */

// Your code here
fetch(URL,options)
    .then(res => {
        console.log(res.status);
        return res;
    })
    .then(res => {
        console.log(res.headers.get("Content-Type"));
        return res;
    })
    .then(res => console.log(res.url));

// OR 
fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
    .then(res => {
        console.log(`response status code = ` + res.status);
        console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
        console.log(`response URL = ` + res.url);
        console.log(`response .redirected = ` + res.redirected);
       
    });
/* ============================== Phase 3 ============================== */

// Your code here

const URL  = './products';
const header = {"Content-Type": "application/x-www-form-urlencoded"};
const body = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
});
const options = {
    method: "POST",
    headers : header,
    body: body
}

fetch(URL,options);
