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
 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 
</head>
 
<body>
 
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
		<div class="navbar-header">
		  <a class="navbar-brand" href="index.php">Vocabulator</a>
		</div>
		<ul class="nav navbar-nav">
		  <li class="active"><a href="index.php">Nauka</a></li>
		  <li><a href="dodaj_slowka.php">Dodaj słówka</a></li>
		</ul>
	  </div>
	</nav> 
 
<br/>
     
	<div class="container">
		<div class="row">
		
			<div id="okno_pytanie" style="background-color: #DCDCDC;" class="col-xs-6 well"> 
				<!--Uproszczony formularz z listą rozwijaną i przyciskami-->
				<form>
					<div id="pytanie_slowko">
					</div>
					<br/>
					<div id="pytanie_tlumaczenie">
						<input type="text" id="pytanie_tlumaczenie_input" class="form-control" value="">
					</div>		
					<br/>
					<div id="pytanie_przyciski">
						<button id="pytanie_sprawdz" type="button" class="btn btn-default">Sprawdź</button> 
					</div>
				</form>
			</div>
			
			
			<div id="okno_odpowiedz" style="background-color: #D0D0D0;" class="col-xs-8 well"> 
				<!--Uproszczony formularz z listą rozwijaną i przyciskami-->
				<form>
					<div id="odp_tlumaczenie">
					</div>		
					<br/>
					<div id="przyciski">
						<button id="odp_chce_powtorzyc" type="button" class="btn btn-default">Chcę jeszcze powtórzyć</button>
						<button id="odp_umiem" type="button" class="btn btn-success">Umiem!</button>
					</div>
				</form>
			</div>	
		</div>
	</div> 
	
     
</body>
</html>