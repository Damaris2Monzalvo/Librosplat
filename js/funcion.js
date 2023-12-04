$(document).ready(
    function() {


        let personajes=["romance", "fantasia", "adulto", "distopia", "KayhurkaRhea"]
        
        $( "#palabra" ).autocomplete({
            source: personajes,
            minlength: 3
        });
        
        $('.cardper').hide()
    

        $('btnbusqueda').click (
            function() {

        let personaje= document.getElementById ('palabra').value 

        if(personaje== "romance"){
            $('.cardper').hide();
            $('#romance').show();
        }


        if(personaje== "fantasia"){
            $('.cardper').hide();
            $('#fantasia').show();
        }


        if(personaje== "adulto"){
            $('.cardper').hide();
            $('#adulto').show();
        }


        if(personaje== "distopia"){
            $('.cardper').hide();
            $('#distopia').show();
        }


        if(personaje== "KayhurkaRhea"){
            $('.cardper').hide();
            $('#KayhurkaRhea').show();
        }



            }
        );

    }

);