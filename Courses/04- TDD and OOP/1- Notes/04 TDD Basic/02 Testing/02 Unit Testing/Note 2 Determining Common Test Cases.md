# Tow cases for tests 
There are two main reason for test specs 

**The first is to specify what should be built.** These tests are created before the code is written and help the developer writing the code know what he or she should be building 


**The Second:** is to prevent people from breaking your code in future development when modifying or adding to your code, fortunately, as long as you have good test specs from before, this should be handled automatically 

## Example: Stickers 
Say you are writing a sticker-distribution algorithm for Andrea, a kindergarten teacher. The task is given like this:
```
Andrea is a kindergarten teacher. She wants to give some stickers to the children in her class.

All the children sit in a line and each of them has a rating score according to his or her performance in the class. 

Andrea wants to give at least 1 sticker to each child. If two children sit next to each other, then the one with the higher rating must get more stickers.

Andrea wants to minimize the total number of stickers she must buy.
```
What test specs should you write ? Before you write anything, the first step is always to understand the problem, Start by walking through some examples 

Say Andrea has four students who have ratings of `[1, 2, 3, 4]`. How many stickers does she need to buy?

The first student can get 1 sticker. The second student has a higher rating and should get 2 stickers. The third is higher than that student so should get 3, and the fourth is higher than the third and should get 4 stickers. Adding them up results in 10 stickers.

This is a solid test case and should be added as spec 
```node.js
describe("Stickers", function(){
	it("should give 10 stickers to sutdents ranked [1,2,3,4]",(){
		const stickers = countStickers([1,2,3,4]);
		expect(stickers).to.equal(10);
	});
});
```
What's next? you could continue this patterns and add more similar tests, For Example, adding a fifth student with a ranking of 5 would require more stickers: `countStickers([1,2,3,4,5])` should return 15

Before adding this test, ask yourself **Does this spec test anything new?**
in this case, not really, Both are testing ascending rating so this spec doesn't add anything 

Since Andrea is trying to minimize the number of stickers purchased, and since the requirement is that students with a higher rating have a higher sticker count than their neighbors, giving the last student 1 sticker works. Thus, the total should be `11`.
```node.js
  it('should give a lower-ranked neighbor 1 sticker', function () {
    const stickers = countStickers([1, 2, 3, 4, 3]);
    expect(stickers).to.equal(11);
  });
```

**Note that the description of the spec tries to explain the reasoning behind the spec. It should be clear from the naming what is being tested.**

## Testing unintuitive cases
What if there is another student at the end with a ranking of 1? How many stickers would each get?

Previously you only had to calculate based on the previous neighbor. When the array looked like `[1, 2, 3, 4, 3]`, the last student was happy with just 1 sticker. Now adding a lower-ranked student changes that. How many stickers are needed for `[1, 2, 3, 4, 3, 1]`?

Since the second-to-last student now is ranked higher than the last student, he or she would expect to get at least 2 stickers, with the last student getting 1 sticker, for a total of `13`.
```node.js

it('should raise the sticker count if lower than its neighbor',() {
    const stickers = countStickers([1, 2, 3, 4, 3, 1]);
    expect(stickers).to.equal(13);
  });
```
Now you can see the problem might get tricky. Can you think of some other examples?

You might expect students ranked `[1, 3, 5]` to get 1+2+3 stickers (6) but what about `[1, 3, 5, 4, 3, 2, 1]`?
this requires 1+2+5+4+3+2+1 stickers, for a total of `18`.

```node.js

  it('should increase the sticker count far backwards if needed',(){
    const stickers = countStickers([1, 3, 5, 4, 3, 2, 1]);
    expect(stickers).to.equal(18);
  });
```
Notice that coming up with test cases forces you to **understand the problem** without writing code. This is a key skill to solving problems, and you will discover that solving problems becomes much easier with a comprehensive suite of test specs.

## Testing edge cases
This may vary by problem but can be especially important when you are building a function that accepts user input. Just because your function requires a list of integers doesn't mean that the user will always use it that way. Because of that, you sometimes need to test edge cases.
```node.js
it('should return `undefind` with improper inputs', function(){
	const stickers = countStickers(['one','two','three']);
	expect(stickers).to.equal(undefined);
});
```
with no students , the function should return no stickers 
```node.js
it('should return 0 with an empty array',function(){
	const stickers = countStickers([]);
	expect(stikers).to.equal(0);
});
```
What about for very large inputs? Does the function still work ?
```node.js
it('should work with 10000 students',function (){
	let largeRanking = [];
	let total = 0;

	for(let i = 0; i < 10000; ++i){
		largeRanking.push(i);
		total += i;
	}

	const stickers = countStickers(largeRanking);
	expect(stickers).to.equal(total);
})
```
This can be useful if there are performance constraints for the problem in question but be careful with these type of tests. These tests will be executed EVERY time someone pushes new code to the code base or deploys to production. They should be lightweight and fast, otherwise you risk bogging down development.

Again, this comes back to **understanding the problem**. What is the max class-size that Andrea can expect? Probably less than 100, so this test case can be left out.

For the remaining tests, think of all the possible unique data patterns that might break the system or be overlooked in development. Writing tests is a fantastic way to improve at problem solving and a great way to build trust when starting a job with a new team.
