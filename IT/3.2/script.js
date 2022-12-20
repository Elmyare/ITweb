var coun = 0, namec, datec;
var year, mounth,day,hour,min, second;
var number = 3;
function setCookie(name, value)
{
	document.cookie = name + "=" + escape(value)+";";
}

function get_cookie ( cookie_name )
{
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
		return ( unescape ( results[2] ) );
	else
		return null;
}

function delete_cookie ( cookie_name )
{
	var cookie_date = new Date ( );  // Текущая дата и время
	cookie_date.setTime ( cookie_date.getTime() - 1 );
	document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

window.onload = function()
{
	var sn = get_cookie("name");
	if(sn == null || sn == "")
	{
		text = "Зарегистрируйтесь!";
	}
	else
	{
		number = parseInt(get_cookie("countVisit"));
		alert("У Вас осталось " + number + " посещений");
		number--;
		setCookie("countVisit", number);

		if (number >= 0)
		{
			var text = "Привет, " + sn + "!";
			namec = sn;
			sn = get_cookie("countEnter");
			coun = parseInt(sn);
			coun++;
			text += "<br> Количество посещений этой страницы: " + coun;
			sn = get_cookie("expires")
			datec = sn;
			var d = new Date();
			d.setTime(Date.parse(datec));
			var d1 = new Date();
			mounth = d1.getMonth()-d.getMonth();
			day = (d1.getDate()-d.getDate());
			min =(d1.getMinutes()-d.getMinutes());
			hour = (d1.getHours()-d.getHours());
			second = (d1.getSeconds()-d.getSeconds());
			text += "<br> Вы были на этой странице: " + mounth + " месяцев, " + day + " дней, " + hour + " часов, " + min + " минут, " + second + "секунд назад";
			var today = new Date()
			var expires = new Date()
			expires.setTime(today.getTime() + 1000*60*60*24*365);
			setCookie("expires", expires.toGMTString());
			setCookie("countEnter", coun);
		}
		
		else 
		{
			alert("У вас закончились посещения!");
			text = "Зарегестрируйтесь!";
			deleteVisit();
		}

		
		
		
	}
	document.getElementById('d1').innerHTML = text;
}

function c_regEdit()
{
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365);
	setCookie("name", document.getElementById("text1").value);
	setCookie("expires", expires.toGMTString());
	setCookie("countEnter", 0);
	alert("Куки сохранены");
	setCookie("countVisit", 3);
}

function c_regNull()
{
	setCookie("name", "");
	setCookie("countEnter", 0);
	alert("Куки удалены");
}

function deleteVisit()
{
	setCookie("countEnter", 0);
	setCookie("countVisit", 3);
	number = 3;
	coun = 0;
}
