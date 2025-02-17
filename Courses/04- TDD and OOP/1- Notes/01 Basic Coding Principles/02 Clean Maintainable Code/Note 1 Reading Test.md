No matter what kind of test you are encountering the most important thing about a test is that it is **readable** and **understandable**. Good tests use descriptive strings to enumerate what they are testing as well as how they are testing it.

You'll be diving more into the actual syntax of writing tests soon but for right now let's see what you can glean without knowing the syntax:
```node.js
describe("avgValue()", function() {
  it("should return the average of an array of numbers", function() {
    assert.equal(avgValue([10, 20]), 15);
  });
});
```

Without knowing the specific syntax you can tell a few things from the outset. The outer function has a string with the name of a function `avgValue()` which is most likely the function you will be testing. Next, you see a description string, `should return the average of an array of numbers`.

So even without understanding the syntax for the test above you can tell _what_ you are testing - the `avgValue` function, and how it is being tested: `should return the average of an array of numbers`.
