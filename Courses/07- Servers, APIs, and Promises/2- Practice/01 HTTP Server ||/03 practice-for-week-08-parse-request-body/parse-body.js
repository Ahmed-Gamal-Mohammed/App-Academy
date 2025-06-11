function firstStep(input) {
  // Your code here
  // "username=azure+green&password=password%21". => [username=azure+green,password=password%21]
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  // [username=azure+green,password=password%21] => [[username,azure+green]],[password,password%21]
  return input.map(str => str.split('='))
}

function thirdStep(input) {
  // Your code here
  //[[username,azure+green]],[password,password%21] = [[username,azure green],[password,password%21]]
  return input.map(arr => [arr[0].replace(/\+/g, " "), arr[1].replace(/\+/g, " ")])
}

function fourthStep(input) {
  
  
  // [[username,azure green],[password,password%21]] => [[username,azure green], [password,password !]]
  return input.map(arr => [decodeURIComponent(arr[0]),decodeURIComponent(arr[1])])
}

function fifthStep(input) {
  // Your code here
  let inputObject = {};
  for(let [key,value] of input){
    inputObject[key] = value;
  }
  return inputObject;
}

function parseBody(str) {
  let parsedData = firstStep(str);
  parsedData = secondStep(parsedData);
  parsedData = thirdStep(parsedData);
  parsedData = fourthStep(parsedData);
  parsedData = fifthStep(parsedData);
  return parsedData;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};