//Description: Sets a new date and returns either a date stamp or formatted date
//Author: tkiddle
//Date: 9-10-2013
//Version: 1.0

var setGetDate = ( function () {

	//Private varibles
	var newDate = new Date(),
		
		dd = newDate.getUTCDate(),
		mm = newDate.getUTCMonth(),
		yyyy = newDate.getUTCFullYear(),
		
		cleanDate = (dd + '/' + mm + '/' + yyyy),
		timeStamp = Date.parse(newDate);


	//Private functions
	function formatDayMonth () {

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

	}

	return {

		//Public methods
		getTimeStamp : function () {

			formatDayMonth();

			return timeStamp;

		},

		getCleanDate : function () {

			formatDayMonth();

			return cleanDate;

		}


	}

})();