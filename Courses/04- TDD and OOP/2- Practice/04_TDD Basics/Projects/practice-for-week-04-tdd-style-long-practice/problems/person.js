class Person {
  // Your code here
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return `Hi, my name is ${this.name}`;
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw TypeError('Input must be an object');
    }

    if (!obj.name || !obj.age) {
      throw TypeError('Object must have name and age properties');
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    const storedHellos = [];

    for (const person of obj) {
      const hello = person.sayHello();
      storedHellos.push(hello);
    }
    return storedHellos;
  }

}

module.exports = Person;
