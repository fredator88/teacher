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
		  <li><a href="index.php">Nauka</a></li>
		  <li class="active"><a href="dodaj_slowka.php">Dodaj słówka</a></li>
		</ul>
	  </div>
	</nav> 
 
<br/>
     
<div class="container">
  <h2>Dodaj słówka</h2>
  <p>Wklej poniżej słówka po angielsku wraz z tłumaczeniem na polski (po myślniku, każda para w jednej linii)</p>
  <form>
    <div class="form-group">
      <textarea class="form-control" rows="5" id="slowka_do_dodania"></textarea>
    </div>
    <button id="dodaj_slowka' type="button" class="btn btn-primary">Dodaj</button>
  </form>
</div>
	
     
</body>
</html>