function clock() {
	var date12 = new Date();
	var hours12 = date12.getHours()%12;
	var period = date12.getHours() >= 12 ? 'pm' : 'am';
	var minutes12 = date12.getMinutes();
	var seconds12 = date12.getSeconds();
	if (seconds12 < 10){
		seconds12 = "0" + seconds12;
	}
	var seconds1 = Math.floor(seconds12 / 10);
	var seconds2 = seconds12 % 10;
	var dy = date12.getDate();
	var dy1 = Math.floor(dy / 10);
	var dy2 = dy % 10;
	var month = date12.getMonth()+1;
	var mth1 = Math.floor(month / 10);
	var mth2 = month % 10;
	var year = date12.getFullYear();
	var yr4 = year % 10; //202"2"
	var yr3 = Math.floor((year / 10)) % 10; // 20"2"2
	var yr2 = Math.floor((Math.floor((year / 10)) / 10)) % 10; // 2"0"22
	var yr1 = Math.floor((year / 1000)); // "2"022
	var hours1 = Math.floor(hours12 / 10);
	var hours2 = hours12 % 10;
	var minutes1 = Math.floor(minutes12 / 10);
	var minutes2 = minutes12 % 10;
	hours1 = "<img src = 'dg" + hours1 + ".gif'>";
	hours2 = "<img src = 'dg" + hours2 + ".gif'>";
	minutes1 = "<img src = 'dg" + minutes1 + ".gif'>";
	minutes2 = "<img src = 'dg" + minutes2 + ".gif'>";
	seconds1 = "<img src = 'dg" + seconds1 + ".gif'>";
	seconds2 = "<img src = 'dg" + seconds2 + ".gif'>";
	period = "<img src = 'dg"+period+".gif'>";

	dy1 = "<img src = 'dg" + dy1 + ".gif'>";
	dy2 = "<img src = 'dg" + dy2 + ".gif'>";
	mth1 = "<img src = 'dg"+mth1+".gif'>";
	mth2 = "<img src = 'dg"+mth2+".gif'>";
	yr1 = "<img src = 'dg" + yr1 + ".gif'>";
	yr2 = "<img src = 'dg" + yr2 + ".gif'>";
	yr3 = "<img src = 'dg" + yr3 + ".gif'>";
	yr4 = "<img src = 'dg" + yr4 + ".gif'>";


	document.getElementById("clock12").innerHTML = hours1 + hours2 + "<img src = 'dgc.gif'>" + minutes1 + minutes2 + "<img src = 'dgc.gif'>" + seconds1 + seconds2 + period;
	document.getElementById("data12").innerHTML = dy1 + dy2 + "<img src = 'dgp.gif'>" + mth1 + mth2 + "<img src = 'dgp.gif'>" + yr1 + yr2 + yr3 + yr4;
	setTimeout("clock()", 1000);
}