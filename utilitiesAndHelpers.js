//Description: General utilities for JS projects
//Author: tkiddle
//Date: 9-10-2013
//Version: 1.0

myApp = {} || myApp;

myApp.util = {

	debug : true,

	dbDir : function (toLog, inUse) {
		if (myApp.util.debug && inUse !== false) {
			console.dir(toLog);
		}
	},

	dbLog : function (toLog, inUse) {
		if (myApp.util.debug && inUse !== false) {
			console.log(toLog);
		}
	},

	dbAlert : function (toLog, inUse) {
		if (myApp.util.debug && inUse !== false) {
			alert(toLog);
		}
	}
}
