<?php 
	$login = $_POST['userLogin'];
	$haslo = $_POST['userPassword'];
	
	$db_user = 'root';
    $db_name = 'devmuster4_db';
    $db_pass = '';
    $connect = mysqli_connect('localhost',$db_user,$db_pass);
	mysqli_select_db($connect,$db_name) or die(mysqli_error($connect));
	$query="SELECT * FROM uzytkownik WHERE login like'$login' AND haslo like '$haslo';";
	if(mysqli_query($connect,$query))
	{
		session_start();
		setcookie("login",$login,time()+3600, "/");
		setcookie("password",$haslo,time()+3600, "/");
	}
	header("Location: index.html");
?>