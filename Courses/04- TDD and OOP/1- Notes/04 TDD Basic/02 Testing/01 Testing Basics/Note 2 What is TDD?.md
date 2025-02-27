As you know, the first step to solving any problem is to understand the problem. Most of the problems you have seen describe the problem requirements with a short, written description and a set of test specs. The descriptions tell you what your code should do while the tests let you know when your code is working as intended.

It turns out, this is common practice in real world development too: in place of long, detailed descriptions of how your code should work, instead your project specifications are provided as a set of tests. Just like at App Academy, once your tests are passing you know your job is done.

This practice of writing tests before writing code is called _Test-driven development_ or _TDD_.

## Motivations for TDD
Imagine you are tasked with upgrading the mailer service in a large codebase. This mailer is used in dozens of places in the code: from sending confirmation emails on account creation, password resets when a user forgets their password, marketing material on new product deals, weekly content digests, and more.

How can you be sure that your upgrade does not break any of the dozens of services that rely on the mailer? Check every single feature individually? If the team uses TDD, you don't need to: **the specs will take care of it for you.**

Or, say you are building an eCommerce site. Your task is to build the Customer class while other developers build the Store, StoreItem and Checkout classes. The way you implement the Customer depends on how the other classes are implemented and your co-workers have a tendency to get "creative" with their code.

How can you be sure that the Store, StoreItem and Checkout objects that your code relies on will work as you expect them to? Wait until they are finished before starting your own work? Again, **if your team uses TDD, you don't need to: the specs will describe all you need to know.**

### Here are some of the biggest motivations for why developers use test-driven development:
1. Writing tests before code ensures that the code written _works_.
    - Code written to pass specs is guaranteed to be testable.
    - Code with pre-written tests easily allows other developers to add and test new code while ensuring nothing else breaks along the way.
2. Only required code is written.
    - In the face of having to write tests for every piece of added functionality TDD can help reduce bloated un-needed functionality.
    - TDD and YAGNI ("you ain't gonna need it") go hand in hand!
3. TDD helps enforce code modularity.
    - A TDD developer is forced to think about their application in small, testable chunks - this ensures the developer will write each chunk to be modular and capable of individual testing.
4. Better understanding of _what_ the code should be doing.
    - Writing tests for a piece of code ensures that the developer writing that code knows what the piece of code is trying to achieve.
## The three steps of TDD: red, green, refactor!
![[Pasted image 20250224213551.png]]
The Test-driven development workflow can be broken down into three simple steps. **Red, Green, Refactor**:
- **Red**: Write the tests and watch them fail (a failing test is red). It's important to ensure the tests initially fail so that you don't have false positives.
- - **Green**: Write the minimum amount of code to ensure the tests pass (a passing test will be green).
- **Refactor**: Refactor the code you just wrote. Your job is not over when the tests pass! One of the most important things you do as a software developer is to ensure the code you write is easy to maintain and read.
