function myMap(inputArray, callback) {
  // Your code here
  const results = [];

  for (const el of inputArray) {
    results.push(callback(el));
  }
  return results;
}

module.exports = myMap;
