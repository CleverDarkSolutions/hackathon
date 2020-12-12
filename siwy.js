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
    document.getElementById("loginElement").innerHTML = "";
    document.getElementById("loginElement").innerHTML="<form action='logout.php'><input type=submit value='wyloguj'></form>";
	} 
	else 
	{
		console.log("Nie ma ciastka? To się zaloguj!");
	}
/*	
function writeList(){
	var table = '<?php 
				$ajdik = $_COOKIE['ajdik'];
				$db_user = 'root';
				$db_name = 'devmuster4_db';
				$db_pass = '';
				$connect = mysqli_connect('localhost',$db_user,$db_pass);
				mysqli_select_db($connect,$db_name) or die(mysqli_error($connect));
				$query="SELECT * FROM notatka WHERE id_wlasciciela like'$ajdik';";
				$result = mysqli_query($connect,$query);
				$count = mysqli_num_rows($result);
				$array = mysqli_fetch_array($result);
				if($count > 0)
				{
					echo "<table style='border: solid 1px black;'>";
					echo "<tr><th>Id</th><th>Przedmiot</th><th>Lastname</th></tr>";
					echo "<td style='width:150px;border:1px solid black;'>";
					while($row = mysqli_fetch_assoc($result)){
						echo "<tr><td>". $row["id"]."</td><td>".$row["przedmiot"]."</td><td>".$row["przedmiot"]."</td></tr>";
					}
				}
				?>
				'
	document.getElementById("noteList").innerHTML= table;
}
*/