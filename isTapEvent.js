//Description: Detect if tap event and return boolean
//Author: tkiddle
//Date: 9-10-2013
//Version: 1.0

function isTapEvent (e) {


	var startPoint,
		touchStartpageX,
		touchStartpageY,
		endPoint,
		touchEndpageX,
		touchEndpageY;


	if (e.type === 'touchstart') {

		touchStartpageX = e.originalEvent.touches[0].pageX;
		touchStartpageY = e.originalEvent.touches[0].pageY;

		startPoint  = (touchStartpageX + touchStartpageY);

	}

	if (e.type === 'touchend') {

		touchEndpageX = e.originalEvent.changedTouches[0].pageX;
		touchEndpageY = e.originalEvent.changedTouches[0].pageY;

		endPoint = (touchEndpageX + touchEndpageY);

	}


	return (startPoint === endPoint) ? true : false;


});

