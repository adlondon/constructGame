
function Character (charOpts) {
  var charOpts = charOpts || {};
  this.name = charOpts.name;
  this.health = charOpts.health || 50;
  this.avatar = charOpts.avatar;
};
function Weapon (weapOpts) {
  var weapOpts = weapOpts || {};
  this.weapon = weapOpts.weapon;
};
function Avatar (avOpts) {
  var avOpts = avOpts || {};
  this.avatar = avOpts.avatar;
};
Character.prototype.avPic = function (avatar) {
  this.avatar = new Avatar({avatar: avatar})
};
Character.prototype.hasA = function (weapon) {
  this.weapon = new Weapon({weapon: weapon});
};
Character.prototype.attack = function (enemy) {
  this.damage(enemy)
};
Character.prototype.damage = function (enemy) {
  var that = this
  if(that.avatar.avatar === "michaelangelo.jpg") {
    var random = Math.ceil(Math.random()*12)
    if(random <= 3) {
      enemy.health = enemy.health - 40;
      if(enemy.health < 1) {
        setTimeout(1000)
        $('.dialogue').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game! Man I love being a turtle!</p>")
      }    else {
        setTimeout(1000)
        $('.dialogue').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
      }
    } else {
      enemy.health = enemy.health
      setTimeout(1000)
      $('.dialogue').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
    }
  } else if(that.avatar.avatar === "donatello.jpg") {
    var random = Math.ceil(Math.random()*12)
    if(random <= 6) {
      enemy.health = enemy.health - 30;
      if(enemy.health < 1) {
        setTimeout(1000)
        $('.dialogue').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game! Man I love being a turtle!</p>")
      } else {
        $('.dialogue').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
      }
    } else {
      enemy.health = enemy.health
      $('.dialogue').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
    }
  } else if(that.avatar.avatar === "leonardo.jpg") {
    var random = Math.ceil(Math.random()*12)
    if(random <=9) {
      enemy.health = enemy.health - 20;
      if(enemy.health < 1) {
        setTimeout(1000)
        $('.dialogue').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game! Man I love being a turtle!</p>")
      } else {
        $('.dialogue').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
      }
    } else {
      enemy.health = enemy.health
      $('.dialogue').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
    }
  } else if(that.avatar.avatar === "raphael.jpg") {
    var random = Math.ceil(Math.random()*12)
    if(random <=12) {
      enemy.health = enemy.health - 10;
      if(enemy.health < 1) {
        finished = true;
        setTimeout(function () {$('.dialogue').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game! Man I love being a turtle!</p>")}, 1000)
        $('.battle').animate({
          marginLeft: 800
        }, 3000)
        return
      } else {
        setTimeout(function () {$('.dialogue').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + enemy.health + " points left.</p>")}, 1000);
        }
    } else {
      enemy.health = enemy.health
      $('.dialogue').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
    }
  } else if (that.avatar.avatar === "shredder.jpg") {
    var random = Math.ceil(Math.random()*2)
    console.log(random)
    if (random === 1) {
      enemy.health = enemy.health - 20;
      if(enemy.health < 1) {
        finished = true;
        setTimeout(function() {
            $('.dialogue').prepend("<p>Major-league bummer man! Shredder shredded you like mozzarella on a pizza. Better luck next time. Wait, did someone say pizza?!</p>")}, 1000)
        $('.battle').html({
          marginRight: 800
        }, 3000)
        return
      } else {
        setTimeout(function () {
          $('.dialogue').append("<p>Oh no, you're hit! You only have" + enemy.health + " points left. Careful friendo. Let's try it again!</p>")}, 2000)
        setTimeout(function () {
          $('.dialogue').append("<button class='attackButton' type='submit'>ATTACK!</button>")}, 3000);
      }

    } else {
      enemy.health = enemy.health;
      setTimeout(function () {
        $('.dialogue').append("<p>But lucky you, Shredder's attack missed! You still have " + enemy.health + " points left. Let's go again!</p>")}, 2000)
      setTimeout(function () {
        $('.dialogue').append("<button class='attackButton' type='submit'>ATTACK!</button>")}, 3000);
    }
  }
};
