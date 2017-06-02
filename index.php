<!doctype html>
<html>
<?php
 
/*Załączenie pliku odpowiadającego za połączenie z bazą danych.*/
require_once('error.php');
require_once('baza.php');
 
?>
 
<head>
<meta charset="utf-8">
<title>Teacher</title>
 
<script src="js/jquery-3.2.1.js"></script>
<script src="js/skrypt.js"></script>
<link rel="stylesheet" href="css/styl.css" />
 
</head>
 
<body>
 
<br/>
     
	<div id="okno_pytanie" style="background-color: #DCDCDC;"> 
		<!--Uproszczony formularz z listą rozwijaną i przyciskami-->
		<form>
			<div id="pytanie_slowko">
			</div>
			<br/>
			<div id="pytanie_tlumaczenie">
				<input type="text" id="pytanie_tlumaczenie_input" value="">
			</div>		
			<br/>
			<div id="pytanie_przyciski">
				<button id="pytanie_sprawdz" type="button">Sprawdź</button> 
			</div>
		</form>
    </div>
	
	
	<div id="okno_odpowiedz" style="background-color: #D0D0D0;"> 
		<!--Uproszczony formularz z listą rozwijaną i przyciskami-->
		<form>
			<div id="odp_tlumaczenie">
			</div>		
			<br/>
			<div id="przyciski">
				<button id="odp_umiem" type="button">Umiem!</button>
				<button id="odp_chce_powtorzyc" type="button">Chcę jeszcze powtórzyć</button>
			</div>
		</form>
    </div>	
	
	
     
</body>
</html>