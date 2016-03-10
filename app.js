console.log("It's time to battle! Your character is either andrew or chelsea, and your weapon is either a boomerang, a potato launcher, or a slingshot. Enter your character name followed by .hasA() and place your weapon of choice inside the parenthesis. For example, if you want to be andrew with a boomerang, you'd type: andrew.hasA('boomerang')'. Each weapon has varying degrees of accuracy, but the less accurate the weapon, the greater the damage. The potato launcher does the most damage, followed by the boomerang and finally the slingshot. Choose your weapons carefully.")

function Character (charOpts) {
  var charOpts = charOpts || {};
  var that = this
  this.name = charOpts.name;
  this.health = 50;
  this.attack = function (enemy) {
    this.damage(enemy)
  };
  this.damage = function (enemy) {
    if(this.weapon.name === "potato launcher") {
      var random = Math.ceil(Math.random()*10)
      if(random < 4) {
        enemy.health = enemy.health - 30;
        if(enemy.health < 1) {
          console.log(enemy.name + " has been eliminated!")
        }
        else {
          console.log("Hit! The potato launcher did 30 points of damage. " + enemy.name + " has " + this.health + " points left.")
        }
      }
      else {
        enemy.health = enemy.health
        console.log("Miss! The potato launcher did no additional. " + enemy.name + " has " + enemy.health + " points left.")
      }
    }
    else if(that.weapon.name === "boomerang") {
      var random = Math.ceil(Math.random()*10)
      if(random < 7) {
        enemy.health = enemy.health - 20;
        if(enemy.health < 1) {
          console.log(enemy.name + " has been eliminated!")
        }
        else {
          console.log("Hit! The boomerang did 20 points of damage. " + enemy.name + " has " + enemy.health + " points left.")
        }
      }
      else {
        enemy.health = enemy.health
        console.log("Miss! The boomerang did no additional. " + enemy.name + " has " + enemy.health + " points left.")
      }
    }
    else if(that.weapon.name === "slingshot") {
      enemy.health = enemy.health -10;
      if(enemy.health < 1) {
        console.log(enemy.name + " has been eliminated!")
      }
      else {
      console.log("Hit! The slingshot did 10 points of damage. " + enemy.name + " has " + enemy.health + " points left.")
    }
    }
    else {
      console.log("Please choose either a 'potato launcher', a 'boomerang', or a 'slingshot'.")
    }
  };
  this.hasA = function (name) {
    this.weapon = new Weapon({name: name});
    console.log("Great! If everyone has chosen their character, it's time to attack. Make sure both andrew and chelsea have weapons. When everyone is armed, enter andrew.attack(chelsea) and chelsea.attack(andrew) to commence battle.");
};
function Weapon (weapOpts) {
  var weapOpts = weapOpts || {};
  this.name = weapOpts.name;
};
function Location (locOpts) {
  var locOpts = locOpts || {};
  this.location = locOpts.location;
};
var andrew = new Character({name: "Andrew"})
var chelsea = new Character({name: "Chelsea"})
