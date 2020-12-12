function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var cookiecheck = getCookie("login");
	if (cookiecheck != "") 
	{
		console.log("Jest ciastko? To się wyloguj!");
		document.getElementById("loginElement").innerHTML="<form action='logout.php'><input type=submit value='wyloguj'></form>";
	} 
	else 
	{
		console.log("Nie ma ciastka? To się zaloguj!");
	}
