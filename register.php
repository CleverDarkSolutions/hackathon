<?php 
	$login = $_POST['userLogin'];
	$haslo = $_POST['userPassword'];
	
	$db_user = 'root';
    $db_name = 'baza11';
    $db_pass = '';
    $connect = mysqli_connect('localhost',$db_user,$db_pass);
	mysqli_select_db($connect,$db_name) or die(mysqli_error($connect));
	$query="INSERT INTO klienci(login,haslo)VALUES('$login','$haslo')";
	mysqli_query($connect,$query);
	session_start();
	setcookie("login",$login,time() + (86400 * 30), "/");
	setcookie("password",$haslo,time() + (86400 * 30), "/");
?>