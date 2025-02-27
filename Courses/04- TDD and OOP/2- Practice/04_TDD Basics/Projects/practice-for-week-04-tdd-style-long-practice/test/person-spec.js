// Your code here
const Person = require('../problems/person');
const chai = require('chai');
const { expect } = chai;

describe('Person class', () => {
  const name = 'Mike';
  const age = 55;
  const otherName = 'Erin';
  const otherAge = 44;
  const newName = 'Joe';
  const newAge = 30;

  let validObj;
  let invalidObj;
  let person;
  let otherPerson;

  beforeEach(() => {
    person = new Person(name, age);
    otherPerson = new Person(otherName, otherAge);
    validObj = { name: newName, age: newAge };
    invalidObj = { height: 60, weight: 100 };
  });

  it('should create successfully', () => {
    expect(person).to.exist;
  });

  it('should have name and age properties, set on creation', () => {
    expect(person).to.have.property('name');
    expect(person).to.have.property('name');
    expect(person.name).to.equal(name);
    expect(person.age).to.equal(age);
  });

  it("should have a sayHello instance method that returns a string of the Person instance's name and a greeting message", () => {
    expect(person.sayHello()).to.equal(`Hi, my name is ${name}`);
  });

  it('should have a visit(otherPerson) instance method that returns a string stating that this instance visited the passed-in person', () => {
    expect(person.visit(otherPerson)).to.equal(`${name} visited ${otherName}`);
  });

  it('should have a switchVisit(otherPerson) instance method that invokes the visit function of the other person', () => {
    expect(person.switchVisit(otherPerson)).to.equal(`${otherName} visited ${name}`);
  });

  it('should have an update(obj) instance method with two contexts', () => {
    context('if the incoming argument is not a valid object', () => {
      it('should throw a TypeError with a clear message', () => {
        const notObj = 1;
        expect(() => person.update(notObj)).to.throw(TypeError, 'Input must be an object');

        expect(() => person.update(invalidObj)).to.throw(TypeError, 'Object must have name and age properties');
      });
    });

    context('if the incoming argument is an object with name and age properties', () => {
      it('should update the instance properties to the passed in object properties', () => {
        person.update(validObj);

        expect(person.name).to.equal(newName);
        expect(person.age).to.equal(newAge);
      });
    });
  });

  it('should have a tryUpdate(obj) instance method with two contexts', () => {
    context('if update is successful', () => {
      it('should return true and update person', () => {
        expect(person.tryUpdate(validObj)).to.be.true;
        expect(person.name).to.equal(newName);
        expect(person.age).to.equal(newAge);
      });
    });

    context('if update is not successful', () => {
      it('should return false instead of throwing an error', () => {
        expect(person.tryUpdate(invalidObj)).to.be.false;
        expect(() => person.tryUpdate(invalidObj)).to.not.throw();
      });
    });
  });

  it('should have a static greetAll(obj) method, which takes in an array of Person instances, calls sayHello on each Person, and stores each returned string in an array, then returns the array', () => {
    const person1 = new Person('Al', 21);
    const person2 = new Person('Bob', 32);
    const person3 = new Person('Carol', 43);

    const returnedArray = Person.greetAll([person1, person2, person3]);
    expect(returnedArray).to.eql([
      'Hi, my name is Al',
      'Hi, my name is Bob',
      'Hi, my name is Carol'
    ]);
  });
});
