//note: session variables are not accessible to the template by default
//you have to explicitly associate them so...
//below is associating our sPlayerEdit session to the template
Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
}

Template.tAddPlayer.rendered = function(evt, tmpl) {
    $('.first-name').val("").focus();

};

//adding events to our template (duh!)
Template.tAddPlayer.events({
    //when someone clicks a class of player-edit
    //set the session of sPlayerEdit to true
    'click .player-edit': function (evt, tmpl) {
        Session.set("sPlayerEdit", true);
        tmpl.find('.first-name').focus();
    },
    //when someone clicks a class of player-remove
    //set the session of sPlayerEdit to false
    'click .player-remove': function () {
      	Session.set("sPlayerEdit", false);
    },
    //when someone clicks a class of remove-name
    //set the session of sPlayerEdit to true
    'click .remove-name': function () {
        //what the heck goes here
        // removePlayer();
    },
    'click .player-add': function (evt, tmpl) {
    //when someone clicks a class of player-add
    //note: the function has the evt object and template object
    //passed to it, the event object holds all the events (there's a lot)
    //the template object holds all the html elements in one big object
    //so you can refer to them and use them inside this function (like in the next line)
    //grab the class of first-name, get the value inside the text box and store that value
    //inside the variable firstName
    	var firstName = tmpl.find('.first-name').value;
         var fieldPosition = tmpl.find('.field-position').value;
        // console.log(firstName);
        //set the session sPlayerEdit to false
      	Session.set("sPlayerEdit", false);
        //call the addPlayer method (note below it is a variable that has a function tied to it)
        //and pass the addPlayer method, the variable firstName (which remember...
        //holds whatever the user typed in the text box...the name of the player)
      	addPlayer(firstName, fieldPosition);
    },
    'keyup .first-name':function(evt, tmpl) {
        // console.log(evt.which);
        if (evt.which === 13) {
            var firstName = tmpl.find('.first-name').value;
            var fieldPosition = tmpl.find('.field-position').value;
        // console.log(firstName);
        //set the session sPlayerEdit to false
        Session.set("sPlayerEdit", false);
        //call the addPlayer method (note below it is a variable that has a function tied to it)
        //and pass the addPlayer method, the variable firstName (which remember...
        //holds whatever the user typed in the text box...the name of the player)
        addPlayer(firstName, fieldPosition)
        }
    }
});

//here is the method called when the player-add class element is clicked
//it takes the firstName argument that was passed and stores it in its parameter
//then the method takes the parameter value and uses MongoDb syntax
//to insert the name into our collection (aka table)
var addPlayer = function(firstName, fieldPosition) {
	Players.insert({
        firstName: firstName,
        fieldPosition: fieldPosition
    });
}
