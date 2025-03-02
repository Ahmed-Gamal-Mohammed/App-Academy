const { Character } = require("./character");

class Enemy extends Character {
  constructor(name,description,currentRoom,cooldown = 3000,attackTarget = null,strength,health) {
    // Fill this in
    super(name, description, currentRoom, strength, health);
    this.cooldown = cooldown;
    this.attackTarget = attackTarget;

    Enemy.enemys.push(this)
  }

  setPlayer(player) {
    this.player = player;
  }

  static enemys = []

  randomMove() {
    // Fill this in
    let keys = Object.keys(this.currentRoom.exits);
    let randomNumber = Math.floor(Math.random() * (keys.length - 1));

    this.currentRoom = this.currentRoom.exits[keys[randomNumber]];

    this.cooldown = 3000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    if (this.cooldown === 0) this.player.applyDamage(this.strength)
    this.cooldown += 3000
  }

  applyDamage(amount) {
    // Fill this in
    super.applyDamage(amount)
    this.attackTarget = this.player
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy,
};
