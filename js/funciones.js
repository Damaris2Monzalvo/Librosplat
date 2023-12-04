$(document).ready(
    function() {


        let personajes=["grecia", "romance", "amar", "fantasia", "damara", "negociaciones", "adulto", "darlisstefany", "Drey", "alevosia", "adan", "hombre", "distopia", "bestia", "Enlosojosdelabestia", "KayhurkaRhea", "Alex", "Leah", "revelaciones", "ArianaGodoy", "strange", "AlexMirez"]
        
        $( "#palabra" ).autocomplete({
            source: personajes,
            minlength: 2
        });
        
        $('.cardper').hide()
    

        $('btnbusqueda').click (
            function() {

        let personaje= document.getElementById ('palabra').value 

        if(personaje=="grecia"){
            $('.cardper').hide();
            $('.grecia').show();
        }

        if(personaje== "romance"){
            $('.cardper').hide();
            $('.romance').show();
        }

        if(personaje== "amar"){
            $('.cardper').hide();
            $('.amar').show();
        }

        if(personaje== "fantasia"){
            $('.cardper').hide();
            $('.fantasia').show();
        }

        if(personaje== "damara"){
            $('.cardper').hide();
            $('.damara').show();
        }

        if(personaje== "negociaciones"){
            $('.cardper').hide();
            $('.negociaciones').show();
        }

        if(personaje== "adulto"){
            $('.cardper').hide();
            $('.adulto').show();
        }

        if(personaje== "darlisstefany"){
            $('.cardper').hide();
            $('.darlisstefany').show();
        }

        if(personaje== "Drey"){
            $('.cardper').hide();
            $('.Drey').show();
        }

        if(personaje== "alevosia"){
            $('.cardper').hide();
            $('.alevosia').show();
        }

        if(personaje== "adan"){
            $('.cardper').hide();
            $('.adan').show();
        }

        if(personaje== "hombre"){
            $('.cardper').hide();
            $('.hombre').show();
        }

        if(personaje== "distopia"){
            $('.cardper').hide();
            $('.distopia').show();
        }

        if(personaje== "bestia"){
            $('.cardper').hide();
            $('.bestia').show();
        }

        if(personaje== "Enlosojosdelabestia"){
            $('.cardper').hide();
            $('.Enlosojosdelabestia').show();
        }

        if(personaje== "KayhurkaRhea"){
            $('.cardper').hide();
            $('.KayhurkaRhea').show();
        }

        if(personaje== "Alex"){
            $('.cardper').hide();
            $('.Alex').show();
        }

        if(personaje== "Leah"){
            $('.cardper').hide();
            $('.Leah').show();
        }

        if(personaje== "revelaciones"){
            $('.cardper').hide();
            $('revelaciones').show();
        }

        if(personaje== "ArianaGodoy"){
            $('.cardper').hide();
            $('.ArianaGodoy').show();
        }

        if(personaje== "strange"){
            $('.cardper').hide();
            $('.strange').show();
        }

        if(personaje== "AlexMirez"){
            $('.cardper').hide();
            $('.AlexMirez').show();
        }


            }
        );

    }

);