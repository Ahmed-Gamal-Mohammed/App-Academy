## Writing tests with Mocha and Chai
_Mocha_ is a **test framework** that specializes in _running_ tests and presenting them in an organized user friendly way.

_Chai_ is an **assertion library** that performs the actual test comparisons.

```node.js
describe ('User class', function () {

  it('should create successfully', function () {

    let user = new User();

    expect(user).to.exist;

  });

});
```
Without knowing any Mocha syntax, you should be able to deduce what this test does. **`describe` is a group of tests** for the `User` class. **`it` tests a single spec** and checks if a User can be created successfully and does this by creating a new user, then **`expect` is an assertion** that checks to see if the new user exists.

`describe` and `it` come from the testing framework, _Mocha_, while `expect` comes from the assertion library, _Chai_. Note that the Mocha functions literally _frame_ the test assertions.


Take notice of how _Mocha_ structures its response in exactly the way you nested your test. The outer `describe` function's message is on the upper level and the inner `it` function's message is nested within. This helps to identify exactly what needs to be done when tests are failing.

## Part four: Specifying functionality with tests 
- According to the project, all user should require a user name  upon creation 
- You can specify this in the test specs with a new test 
```node.js
describe('user class',function(){
	it('should create successfully', function(){
		let user = new User();
		expect(user).to.exist;
	});

	it('should set username on creation',function(){
		let user = new User("Ahmed");

		expect(user.username).to.equal("Ahmed");
	});
});
```

## Part Five: DRYing your tests with mocha Hooks
When creating a suite of tests for a user class, you will likely need to create a new user before each test runs, You can clean up the repetition using `Mocha Hooks` [before] or [beforeEach]

```node.js
describe('User class',function(){
	let user;
	beforeEach(()=>{
		user = new User("Ahmed");
	});

	it('should create successfully', function(){
		expext(user).to.exist;
	});

	it('should set username on creation',function(){
		expect(user.username).to.equal("Ahmed");	
	});
});
```

The [beforeEach] hook will set up code that runs before each test in the `describe` block
while [before] runs once at the beginning of the block

similarly, there are `afterEach` and `after` hooks which can be used to clean up after each test, or after the test blocks runs 

