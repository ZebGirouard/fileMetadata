'use strict';

function TimestampHandler () {
	
	this.getTimestamp = function (req, res) {
	    var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		var dateTime = req.params.dateTime;
		var dateInt = Number(dateTime);
		var unixFormat = new Date(dateTime).getTime();
		var naturalFormat = allMonths[new Date(dateInt*1000).getMonth()] + " " + new Date(dateInt*1000).getDate() + ", " + new Date(dateInt*1000).getFullYear()
		if (unixFormat > 0) {
		    res.json({unix: unixFormat/1000, natural: dateTime});
		}
		else if (dateInt % 1 === 0  && dateInt < Number.MAX_SAFE_INTEGER && dateInt > Number.MIN_SAFE_INTEGER) {
		    res.json({unix: dateInt, natural: naturalFormat});
		}
		else {
		    res.json({unix: null, natural: null});
		}
	};
}

module.exports = TimestampHandler;
