Template.tAddPlayer.players = function() {
  return Players.find();
}

Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
}

Template.tAddPlayer.events({
    'click .player-edit': function () {
      	Session.set("sPlayerEdit", true);
    },
    'click .player-remove': function () {
      	Session.set("sPlayerEdit", false);
    },
    'click .remove-name': function () {
    
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
