<?php
 
/*Definiowanie zmiennych z danymi niezbędnymi do połączenia z bazą danych*/
$serwer = 'localhost';
$uzytkownik = 'root';
$haslo = '';
$nazwa_bazy = 'nauczyciel_slowek';
  
/*Połączenie z bazą*/
$db = mysqli_connect($serwer, $uzytkownik, $haslo, $nazwa_bazy);

/*Komunikat o błędzie w przypadku problemów z połączeniem*/
if (mysqli_connect_errno()) 
{
    echo 'Błąd';
    exit;   
}
else {
	$db->set_charset("utf8");
}
 
?>