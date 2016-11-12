angular.module('app').filter('kickoff', function() {

	var todayTimestamp = 1439970600; //Aug 19 2015 08:50:00
	
  return function(timestamp) {

		var secondsToGo;
		
		if(!timestamp)return;

		secondsToGo = parseInt(timestamp) - todayTimestamp;

		if( secondsToGo < 60 ){
			return secondsToGo + 'sec';
		}else if( secondsToGo < 60 * 60 ){
			return Math.floor(secondsToGo / 60) + 'min';
		}else if( secondsToGo < 60 * 60 * 24 ){
			return Math.floor(secondsToGo / 60 / 60) + 'h';
		}else{
			return Math.floor(secondsToGo / 60 / 60 / 24 ) + 'day(s)';
		}

  }

});