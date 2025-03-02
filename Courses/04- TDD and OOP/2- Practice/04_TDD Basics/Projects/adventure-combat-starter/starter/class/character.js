class Character {

  constructor(name, description, currentRoom,  items = [],strength = 10,health = 100) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = items;
    this.strength = strength;
    this.health = health;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health <= 0)
      this.die();
  }

  die() {
    // Fill this in
    this.currentRoom.items.push(...this.items);
    this.items =[];
    this.currentRoom =null;
  }

}

module.exports = {
  Character,
};
