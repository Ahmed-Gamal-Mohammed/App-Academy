const User = require('./classes/user');

const michelle = new User('Michelle');

const change_Name = michelle.changeName;
const greetAfterNameChange = (changeName, newName) =>{
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(change_Name, 'Elle');
  // should print out: Hi my name is Elle
