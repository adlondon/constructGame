function Character (charOpts) {
  var charOpts = charOpts || {};
  this.name = charOpts.name;
  this.health = 100;
  this.attack = function (enemy) {
    enemy.damage(this)
  };
  this.damage = function (enemy) {
    if(this.weapon === "potato launcher") {
      var random = Math.ceil(Math.random()*10)
      if(random < 4) {
        this.health = this.health - 30;
        if(this.health < 1) {
          console.log(this.name + " has been eliminated!")
        }
        else {
          console.log("Hit! The potato launcher did 30 points of damage. " + this.name + " has " + this.health + " points left.")
        }
      }
      else {
        this.health = this.health
        console.log("Miss! The potato launcher did no additional. " + this.name + " has " + this.health + " points left.")
      }
    }
    else if(this.weapon === "boomerang") {
      var random = Math.ceil(Math.random()*10)
      if(random < 7) {
        this.health = this.health - 20;
        if(this.health < 1) {
          console.log(this.name + " has been eliminated!")
        }
        else {
          console.log("Hit! The boomerang did 20 points of damage. " + this.name + " has " + this.health + " points left.")
        }
      }
      else {
        this.health = this.health
        console.log("Miss! The boomerang did no additional. " + this.name + " has " + this.health + " points left.")
      }
    }
    else if(this.weapon === "slingshot") {
      this.health = this.health -10;
      console.log("Hit! The slingshot did 20 points of damage. " + this.name + " has " + this.health + " points left.")
    }
    else {
      console.log("Please choose either a 'potato launcher', a 'boomerang', or a 'slingshot'.")
    }
  };
  this.hasA = function (name) {
    this.weapon = new Weapon({name: name});
  }
};
function Weapon (weapOpts) {
  var weapOpts = weapOpts || {};
  this.name = weapOpts.name;
};
function Bonus () {
};
var andrew = new Character({name: "Andrew"})
var chelsea = new Character({name: "Chelsea"})
