const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const wantedItem = this.currentRoom.items.filter(
      (item) => item.name === itemName
    );

    this.items.push(wantedItem[0]);
    this.currentRoom.items.splice(
      this.currentRoom.items.indexOf(wantedItem[0], 1)
    );
  }


  dropItem(itemName) {
    // Fill this in
    const wantedItem = this.items.filter((item) => item.name === itemName);

    this.currentRoom.items.push(wantedItem[0]);
    this.items.splice(this.items.indexOf(wantedItem[0], 1));
  }

  eatItem(itemName) {
    // Fill this in
    const wantedItem = this.items.filter((item) => item.name === itemName)[0];

    if (wantedItem instanceof Food)
      this.items.splice(this.items.indexOf(wantedItem, 1));
  }


  getItemByName(name) {
    // Fill this in
    return this.items.reduce((searchItem, item) => {
      if (item.name === name) return item;
      return searchItem;
    }, {});
  }

  hit(name) {
    // Fill this in
    let target = Enemy.enemys.reduce((target, enemy) => {
      if (enemy.name === name) return enemy
      return target
    }, null)

    if (target.currentRoom === this.currentRoom) {
      target.applyDamage(this.strength)
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
