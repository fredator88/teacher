<?php
 
/*Załączenie pliku odpowiadającego za połączenie z bazą danych.*/
require_once('baza.php');
 
/*Przypisanie danych wysłanych przez skrypt.js do zmiennej*/
$id_slowka=$_POST['id'];
 
/*Zapytanie wprowadzające do kolumny nazwa_kraju, w tabeli kraje, 
wartości ze zmiennej $wartosc_z_listy_post_filtr*/
$zapytanie_wyslij = "UPDATE slowko SET 'czy_nauczone'= 1 WHERE slowko_id = $id_slowka ";
 
/*Wykonanie zapytania wysyłającego*/
$wynik_wyslij = mysqli_query($db, $zapytanie_wyslij);

/*Wybierz nastepne słówko do wyświetlenia*/
$zapytanie_wyslij = "UPDATE slowko SET 'czy_nauczone'= 1 WHERE slowko_id = $id_slowka ";

$wynik_wyslij = mysqli_query($db, $zapytanie_wyslij);

?>