- Node.js is a very powerful runtime environment built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive applications like video streaming sites, robots, and other general purpose applications. For your purposes the most advantageous feature of Node is that it provides a way for you to run JavaScript outside of the browser.
- to install **nvm** use the following command 
	- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
- to install node use the following command 
	- `nvm install node` this will install the latest version of node 
- `node --version` for checking the version of node 
- `which node` You can verify that the Node.JS you installed is coming from your `nvm` setup, by using this shell command:

---
# Running Your Code

There are two ways that you can run JS code 
	1- Using the **`Node REPL`**
	2- using node to run a **`.js file`**

1- **Node REPL (Read, Evaluate, Print, Loop)**
	 - is used for testing quick ideas 
	 - Any code that you type into the `Node REPL` will be lost when you exit the REPL.
2- **.JS file**
	 - are used for saving code for the long term
	 - When you work on problem sets, projects, and anything else you want to save, you should always save your code to a `.js` file!

---
# Non-standard For Loops
So far, you've probably been using for-loops the same way: iterating through an array like structure one by one; but for-loops are much more flexible than that and can be used in many different situations.
# Introduction to Cypress Testing
- Cypress can be used to test anything that runs in a web browser, including basic HTML and CSS code, React applications , and applications built with other tech stacks. 
## installing Cypress 
In any App Academy practice or assessment project that includes Cypress tests, you will notice the following items in the directory structure:

- **package.json** file - includes all packages and dependencies needed for the project (including Cypress)
- **cypress.json** file - includes some configuration for the Cypress tests
- **cypress** directory - includes the test file(s), typically within the **integration** directory.
```
For example 
--------------------------------------------------------------------
cypress-example-project
|__ package.json
|__ cypress.json
|__ cypress
  |__ integration
    |__ test-spec.js
```
---
## Common Error Messages
Sometimes a test will fail if the HTML element described in the test cannot be found on the page. This is called an Assertion Error.
```
AssertionError: Timed out retrying after 4000ms: Expected to find element: `img`, but never found it.
      at Context.eval (http://localhost:64833/__cypress/tests?p=cypress/integration/test.spec.js:184:19)
```
In this error, we can see that the `img` tag was not found. The bottom line shows us exactly where we can look in the test file to see what the test was looking for.


In other cases, the correct HTML element may be found, but the text within the `.should()` assertion is not true. In this case, the test result will show you what the test was expecting to find (in green text, with a +) and what it found instead (in red text, with a -). This example shows that the test failed because the test expected to find a link to **form.html**, but failed because it found a link to **forms.html**.

```
  4) Elements on index.html
       has a link to the form page

      Timed out retrying after 4000ms
      + expected - actual

      -'forms.html'
      +'form.html'
      
      at Context.eval (http://localhost:64884/__cypress/tests?p=cypress/integration/test.spec.js:120:73)
```

