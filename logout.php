<?php
	setcookie("login",$login,time()-30, "/");
	setcookie("password",$haslo,time()-30, "/");
	setcookie("ajdik",$ajdik,time()-30, "/");
	header("Location: index.html");
?>