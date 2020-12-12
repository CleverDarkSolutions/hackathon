<?php 
	$ajdik=$_COOKIE['ajdik'];
	$tytul=$_POST['tytul'];
	$przedmiot= $_POST['subject'];
	$tresc = $_POST['notepadText'];
	$db_user = 'root';
    $db_name = 'devmuster4_db';
    $db_pass = '';
    $connect = mysqli_connect('localhost',$db_user,$db_pass);
	mysqli_select_db($connect,$db_name) or die(mysqli_error($connect));
	$query="INSERT INTO Notatki(Id_Wlasciciela,Tytul,Przedmiot,Tresc) VALUES('$ajdik','$tytul','$przedmiot','$tresc')";
	mysqli_query($connect,$query);
	setcookie("login",$login,time()+3600, "/");
	setcookie("password",$haslo,time()+3600, "/");
	setcookie("ajdik",$ajdik,time()+3600, "/");
?>