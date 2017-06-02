/*Ustawienie wykonania działań wówczas, gdy strona jest całkowicie wczytana */
$(document).ready(function(){
    
	var id_slowka;
	var slowko_pl;
	var slowko_ang;
	
	/*INICJALIZACJA*/
	function init () {
		
		//ukryj nieuzywane kontrolki
		$("#okno_odpowiedz").hide();
		$("#okno_pytanie").show();
		
		
		//$('#slowko').append('<p>hello</p>');
		
        $.ajax({
            type:"GET", /*Informacja o tym, że dane będą pobierane*/
            url:"pobierz.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            contentType:"application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
            dataType:'json', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(json) { /*Funkcja zawiera parametr*/
                     
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                    for (var klucz in json)
                        {
                            var wiersz = json[klucz];  /*Kolejne przebiegi pętli wstawiają nowy klucz*/     
                            id_slowka = wiersz[0];
                            slowko_pl = wiersz[1];
                            slowko_ang = wiersz[2];
                             
                            /*Ustalenie sposobu wyświetlania pobranych danych w bloku div*/
                            $("<span>"+slowko_pl+"</span>")
                            .appendTo('#pytanie_slowko')
                        } 
                },
                 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
        });

	}

	/*PREZENTACJA PRAWIDŁOWEJ ODPOWIEDZI */
    $('#pytanie_sprawdz').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku sprawdz*/

		$("#okno_odpowiedz").show();
		$("#okno_pytanie").hide();
	
		var odpowiedz = $("#pytanie_tlumaczenie_input").val();
		$("#pytanie_tlumaczenie_input").val("");

		$("#odp_tlumaczenie").empty();
		
		$("#odp_tlumaczenie").append("<span>Pytanie:<br/>"+slowko_pl+"</span><br/><br/>");
		$("#odp_tlumaczenie").append("<span>Twoje tłumaczenie:<br/>"+odpowiedz+"</span><br/><br/>");
		$("#odp_tlumaczenie").append("<span>Poprawne tłumaczenie:<br/>"+slowko_ang+"</span>");		
 
    });

	/*ZAPAMIĘTANIE SŁÓWKA JAKO NAUCZONEGO*/
    $('#odp_umiem').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku sprawdz*/
		
        $.ajax({
            type:"POST", /*Informacja o tym, że dane będą wysyłane*/
            url:"umiem.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            data: {id:id_slowka}, /*Zdefiniowanie jakie dane będą wysyłane na zasadzie 
            pary klucz-wartość np: wartosc_z_listy_ajax=Polska*/
                 
                /*Działania wykonywane w przypadku sukcesu*/
                success:function() {
 
                    /*Zdefiniowanie tzw. alertu (prostej informacji) w sytacji sukcesu wysyłania. 
                    Za pomocą alertów możemy diagnozować poprawne działania funkcji. 
                    Jest to bardzo przydatne w sytacji problemów z dziłaniem programu.*/
                    alert("Wysłano do bazy danych"); 

                },
 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
        });
		
		$("#okno_odpowiedz").hide();
		$("#okno_pytanie").show();
		
 
    });	
	
	/*PRZEJŚCIE DO NASTĘPNEGO SŁÓWKA*/
    $('#odp_chce_powtorzyc').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku sprawdz*/

		$("#okno_odpowiedz").hide();
		$("#okno_pytanie").show();
 
    });	
	
//    /*WYSYŁANIE DANYCH DO BAZY*/
//    $('#wyslij').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
//    - kliknięcie przycisku wyślij*/
//	
//		
//		//$('<p>hello</p>').appendTo('#slowko');
//
//		//$('<p>Text</p>').appendTo('#slowko');
//	
//        /*Funkcja pobierająca wartość opcji z listy, w tym przypadku nazwa kraju, 
//        która następnie zapisywana jest do zmiennej*/
//        var wartosc_z_listy = $('#lista').val();
//
//        $.ajax({
//            type:"POST", /*Informacja o tym, że dane będą wysyłane*/
//            url:"wyslij.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
//            data: {klucz_ajax:wartosc_z_listy}, /*Zdefiniowanie jakie dane będą wysyłane na zasadzie 
//            pary klucz-wartość np: wartosc_z_listy_ajax=Polska*/
//                 
//                /*Działania wykonywane w przypadku sukcesu*/
//                success:function() {
// 
//                    /*Zdefiniowanie tzw. alertu (prostej informacji) w sytacji sukcesu wysyłania. 
//                    Za pomocą alertów możemy diagnozować poprawne działania funkcji. 
//                    Jest to bardzo przydatne w sytacji problemów z dziłaniem programu.*/
//                    alert("Wysłano do bazy danych"); 
//
//                },
// 
//                /*Działania wykonywane w przypadku błędu*/
//                error: function(blad) {
//                    alert( "Wystąpił błąd");
//                    console.log(blad); /*Funkcja wyświetlająca informacje 
//                    o ewentualnym błędzie w konsoli przeglądarki*/
//                }
//        });
// 
//    });
 
    /*POBRANIE DANYCH Z BAZY*/
    $('#pobierz').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku pobierz*/
     
        $.ajax({
            type:"GET", /*Informacja o tym, że dane będą pobierane*/
            url:"pobierz.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            contentType:"application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
            dataType:'json', /*Informacja o formacie transferu danych*/
             
                /*Działania wykonywane w przypadku sukcesu*/
                success: function(json) { /*Funkcja zawiera parametr*/
                     
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                    for (var klucz in json)
                        {
                            var wiersz = json[klucz];  /*Kolejne przebiegi pętli wstawiają nowy klucz*/     
                            id_slowka = wiersz[0];
                            slowko_pl = wiersz[1];
                            slowko_ang = wiersz[2];
							
                            /*Ustalenie sposobu wyświetlania pobranych danych w bloku div*/
                            $("<span>"+slowko_pl+"</span>")
                            .appendTo('#slowko')
                        } 
                },
                 
                /*Działania wykonywane w przypadku błędu*/
                error: function(blad) {
                    alert( "Wystąpił błąd");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                }
        });
    });
 
 
    /*USUWANIE DANYCH Z BAZY*/
 
//    $('#wyslij, #pobierz').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
//    - kliknięcie przycisku pobierz lub wyślij*/
//         
//        $.ajax({
//            type:"POST", /*Informacja o tym, że dane będą wysyłane*/
//            url:"usun.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
// 
//                /*Działania wykonywane w przypadku sukcesu*/
//                success : function() {
//                /*Tu można przykładowo wstawić: alert( "Usuwam"), aby uzyskać potwierdzenie;*/
//                },
//                 
//                 
//                /*Działania wykonywane w przypadku błędu*/ 
//                error: function(blad) {
//                    alert( "Wystąpił błąd");
//                    console.log(blad); /*Funkcja wyświetlająca informacje o ewentualnym błędzie 
//                    w konsoli przeglądarki*/
//                }
//        });
// 
//    });
 
 
	init ();
     
}); /*Klamra zamykająca $(document).ready(function(){*/