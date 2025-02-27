## Why do we test?
- To make sure the dang thins works 
	- Yes, that's obvious, but dagnabit, it's important 
- To increase flexibility & reduce fear (of code)

When you are writing automated tests for an application you are writing the _specifications_ of how that application should behave. In the software industry automated tests are often called "specs", which is short for the word "specification".

- _Make collaboration easier_
	- Complex applications are built by teams of developers. It may be that not all those developers will actually get the chance to talk to one another (they're busy, they may live in different places, some of them may have left the company, new people just joined, it's a huge project, etc.).
	- Specs allow teams to have confidence that each module performs a specific task and reduces the need for expensive coordination. The specs themselves become an effective form of communication.
- _Produce documentation_
	- If the tests are written well, the tests can serve as documentation for the codebase. Need to know what such and such module does? Check out the specs. This is related to easing collaboration.
## What do we test ?
### Test the public interface
When you're trying to figure out what you should be testing, ask yourself, "What is (or will be) the public interface of the module or class I'm writing?" That is, what are the functions that the outside world will have access to and rely on?

Ideally, you'd have thorough test coverage on the entire public interface. When that's not possible, ensure that your tests cover the most important and/or complex parts of that interface - that is, the pieces that you need to make sure work as intended (and expected).
### The testing pyramid
A common metaphor used to group software tests into separate levels of testing is the testing pyramid.

![[image02.png]]Let's quickly go over each level before talking about the pyramid as a whole:
- **Unit Tests:** The smallest unit of testing- used to test smallest pieces of your application in isolation to ensure each piece works before you attempt to put those pieces together. Each unit test should focus on testing [one thing] These are generally the fastest tests to write and run 
- **Integration Tests:** Once you have your unit tests in place you know each piece works in isolation- but what about when those pieces interact with each other? Integration tests are next level up, they will test the interactions between two pieces of your application. integration tests will ensure the units you've written work coherently together 
- **End-to-End (E2E) Tests**: End-to-end tests are the highest level of testing - these will test the whole of your application. End-to-end tests are the closest automated tests come to testing the actual user experience of your application. These are generally the slowest tests to write and run.
- 