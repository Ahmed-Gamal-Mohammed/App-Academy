export function getAllDogs() {
    // Your code here
    // if you don't pass the optional parameter, it will be considers that it is GET
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    // Your code here
    // if you don't pass the optional parameter, it will be considers that it is GET
    return fetch("/dogs/2");
}

export function postNewDog() {
    // Your code here
    const url = "/dogs";
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    const body = new URLSearchParams({
        name: "Rex",
        age:5
    });

    const options = {
        method: "POST",
        headers: headers,
        body: body
    };
    return fetch(url,options);
}

export function postNewDogV2(name, age) {
     // Your code here
  const url = "/dogs";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = new URLSearchParams({
    name: name,
    age: age
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body
  };

  return fetch(url, options);

}

export function deleteDog(id) {
      // Your code here
    const url = `/dogs/${id}`;
    const headers = {
        "AUTH": "ckyut5wau0000jyv5bsrud90y"
    };

    const options = {
        method: "DELETE",
        headers: headers
    };

    return(url,options);
}