
$(document).ready(function () {
  page.init()
})

var finished = false;

var page = {
  init: function() {
    page.styling();
    page.events();

  },

  styling: function() {


  },

  events: function() {
    $('.usernameInputForm').on('submit', page.usernameSet);
    $('.avatar').on('click', 'img', page.avatarSet);
    $('.diffButton').on('click', page.difficultySet);
    $('body').on('click', '.attackButton', page.attackComputer);
  },

  usernameSet: function (event) {
    event.preventDefault();
    usernameInput = $('.usernameInput').val()
    username = new Character({name: usernameInput})
    $('section').removeClass('active');
    $('.difficulty').addClass('active');
    var dialogTmpl = _.template(templates.difficulty)
    $('.dialogue').html(dialogTmpl(username))
  },

  avatarSet: function (event) {
    event.preventDefault();
    var avatarInput = $(this).attr('src');
    username.avPic(avatarInput);
    page.addPlayerToDom();
    page.addComputerToDom();
    $('section').removeClass('active');
    $('.battleBox').addClass('active');
    var dialogTmpl = _.template(templates.fightScene)
    $('.dialogue').html(dialogTmpl())
    setTimeout(function() {$('.dialogue').append("<button class='attackButton' type='submit'>ATTACK!</button></p>")}, 5000)
    $('.battle').animate({
      marginLeft: 0
    }, 5000)
  },

  difficultySet: function (event) {
    event.preventDefault();
    difficulty = $(this).attr("rel")
    if (difficulty === "easy") {
      computer = new Character({name: "Shredder", health: 40})
    } else if (difficulty === "normal") {
      computer = new Character({name: "Shredder"})
    } else if (difficulty === "hard") {
      computer = new Character({name: "Shredder", health: 60})
    } else {
      console.log("DIFFICULTY ERROR")
    }
    computer.avPic("shredder.jpg")
    var dialogTmpl = _.template(templates.avatar)
    $('.dialogue').html(dialogTmpl())
    $('section').removeClass('active');
    $('.avatarBox').addClass('active');
  },

  addPlayerToDom: function () {
    var tmpl = _.template(templates.battle)
    $('.battleBox').html(tmpl(username))
  },

  addComputerToDom: function () {
    var tmpl = _.template(templates.battle)
    $('.battleBox').append(tmpl(computer))
  },

  attackComputer: function (event) {
    event.preventDefault();
    $('.dialogue').html("")
    username.attack(computer)
    if (finished === false) {
    computer.attack(username)
    if (finished === true) {
      return
    }
    }
  }
}
