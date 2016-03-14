
function Character (charOpts) {
  var charOpts = charOpts || {};
  var that = this
  this.name = charOpts.name;
  this.health = charOpts.health || 50;
  this.avatar = charOpts.avatar;
  this.attack = function (enemy) {
    this.damage(enemy)
  };
  this.damage = function (enemy) {
    if(that.avatar.avatar === "michaelangelo.jpg") {
      var random = Math.ceil(Math.random()*12)
      if(random <= 3) {
        enemy.health = enemy.health - 40;
        if(enemy.health < 1) {
          setTimeout(1000)
          $('header').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game!</p>")
        }    else {
          setTimeout(1000)
          $('header').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
        }
      } else {
        enemy.health = enemy.health
        setTimeout(1000)
        $('header').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
      }
    } else if(that.avatar.avatar === "donatello.jpg") {
      var random = Math.ceil(Math.random()*12)
      if(random <= 6) {
        enemy.health = enemy.health - 30;
        if(enemy.health < 1) {
          setTimeout(1000)
          $('header').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game!</p>")
        } else {
          $('header').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
        }
      } else {
        enemy.health = enemy.health
        $('header').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
      }
    } else if(that.avatar.avatar === "leonardo.jpg") {
      var random = Math.ceil(Math.random()*12)
      if(random <=9) {
        enemy.health = enemy.health - 20;
        if(enemy.health < 1) {
          setTimeout(1000)
          $('header').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game!</p>")
        } else {
          $('header').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + this.health + " points left.</p>")
        }
      } else {
        enemy.health = enemy.health
        $('header').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
      }
    } else if(that.avatar.avatar === "raphael.jpg") {
      var random = Math.ceil(Math.random()*12)
      if(random <=12) {
        enemy.health = enemy.health - 10;
        if(enemy.health < 1) {
          setTimeout( function () {$('header').html("<p>Bodacious to the max! Shredder has been eliminated, you win the game!</p>")}, 1000)
          $('.battle').animate({
            marginLeft: 50%
          }, 3000)
        } else {
          setTimeout(function () {
            $('header').html("<p>Righteous tighteous, you're attack hit it's mark! Shredder only has " + enemy.health + " points left.</p>")}, 2000);
          }
      } else {
        enemy.health = enemy.health
        $('header').html("<p>Totally uncool. Your attack missed. Shredder still has " + enemy.health + " points left.</p>")
      }
    } else if (that.avatar.avatar === "shredder.jpg") {
      var random = Math.ceil(Math.random()*2)
      if (random === 1) {
        enemy.health = enemy.health - 20;
        if(enemy.health < 1) {
          setTimeout(1000)
          $('header').prepend("<p>Major-league bummer man! Shredder shredded you like mozzarella on a pizza. Better luck next time. Wait, did someone say pizza?!</p>")
        } else {
          setTimeout(function () {
            $('header').append("</p>Oh no, you're hit! You only have" + enemy.health + " points left. Careful friendo. Let's try it again! " + "<button class='attackButton' type='submit'>ATTACK!</button></p>")}, 4000)
        }
      } else {
        enemy.health = enemy.health;
        setTimeout(function () {
          $('header').append("</p>But lucky you, Shredder's attack missed! You still have" + enemy.health + " points left. Let's try it again! " + "<button class='attackButton' type='submit'>ATTACK!</button></p>")}, 4000)
      }
    }
  };
  this.hasA = function (weapon) {
    this.weapon = new Weapon({weapon: weapon});
    console.log("Great! If everyone has chosen their character, it's time to attack. Make sure both andrew and chelsea have weapons. When everyone is armed, enter andrew.attack(chelsea) and chelsea.attack(andrew) to commence battle.");
  };
  this.avPic = function (avatar) {
    this.avatar = new Avatar({avatar: avatar})
  }
}
function Weapon (weapOpts) {
  var weapOpts = weapOpts || {};
  this.weapon = weapOpts.weapon;
};
function Avatar (avOpts) {
  var avOpts = avOpts || {};
  this.avatar = avOpts.avatar;
};
