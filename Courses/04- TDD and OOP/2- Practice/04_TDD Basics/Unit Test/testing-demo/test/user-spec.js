// Mocha is a test framework that specializes in running tests and presenting them in an organized user friendly way

// Chai is an assertion library that performs tha actual test comparisons

const { expect, use } = require("chai");
const User = require("../class/user");
// const { it } = require("mocha");




// describe is a group of tests for the User class
// it test a single spec and checks if a user can be created successfully
// expect is an assertion that checks to see if the new user exists
describe ('User class', function () {

    // describe and it come from the testing framework (Mocha)
    // expect comes from the assertion library

    it('should create successfully', function () {

      let user = new User();

      expect(user).to.exist;

    });

    it('should set username on creation',function(){
        let user = new User("Ahmed");

        expect(user.username).to.equal("Ahmed");
    });

});
