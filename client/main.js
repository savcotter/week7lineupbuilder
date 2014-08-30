// counter starts at 0
// Session.setDefault("counter", 0);
Session.setDefault("sPlayerEdit", false);
Session.setDefault("sPlayerId", null);

Template.tMainApp.players = function() {
  return Players.find();
}

Template.tMainApp.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
}

// Template.hello.helpers({
//     counter: function () {
//       return Session.get("counter");
//     }
// });

// Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set("counter", Session.get("counter") + 1);
//     }
// });

Template.tMainApp.events({
    'click .player-edit': function () {
      	Session.set("sPlayerEdit", true);
    },
    'click .player-remove': function () {
      	Session.set("sPlayerEdit", false);
    },
    'click .remove-name': function () {
      	removePlayer;
    },
    'click .player-add': function (evt, tmpl) {
    	var firstName = tmpl.find('.first-name').value;
    	// console.log(firstName);
      	Session.set("sPlayerEdit", false);
      	addPlayer(firstName);
    }
});

var addPlayer = function(firstName) {
	Players.insert({firstName: firstName});
}
