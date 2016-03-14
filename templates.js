var templates = {

battle: [
  '<div class="<%= name %> battle">',
    '<figure>',
      '<img src="<%= avatar.avatar %>" alt="" />',
      '<figcaption><%= name %></figcaption>',
    '</figure>',
  '</div>'].join(""),

avatar:
  '<p>Awesome job <%= name %>! Now you need to choose your Turtle. They have all been training hard with Master Splinter to hone their ninja skills!</p>',
fightScene:
  "<p>Alright here comes Shredder... It's time to rumble!</p>",
difficulty:
  "<p>Tubular! Now choose the difficulty level. Remember, Shredder is tough, so choose wisely!</p>"
};
