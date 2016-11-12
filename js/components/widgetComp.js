angular.module('app').component('widget', {
  templateUrl: 'templates/widget.html',
  bindings: {
    nextRace: '<'
  },
  controller: function() {

  	this.oddsClicked = function ( race_id ) {
  		window.location.href = "http://www.racebets.com/bet/"+race_id;
  	};

  }
});