$(function(){

    /*quote animation*/
    var ids = ['#first','#second','#third','#fourth'];
    var count = 0;

    setInterval(function(){
        $('#first').css('display','none');
        $('#second').css('display','none');
        $('#third').css('display','none');
        $('#fourth').css('display','none');

        switch(count) {
            case 0:
                $('#first').css('display','block');
                $("#first").fadeOut(0);
                $("#first").fadeIn(4000);
                $("#first").fadeOut(4000);
                
                count = count + 1;
                break;
            case 1:
                $('#second').css('display','block');
                $("#second").fadeOut(0)
                $("#second").fadeIn(4000);
                $("#second").fadeOut(4000)
               
                count = count + 1;
                break;

            case 2:
                $('#third').css('display','block');
                $("#third").fadeOut(00)
                $("#third").fadeIn(4000);
                $("#third").fadeOut(4000)
               
                count = count + 1;
                break;
            case 3:
                $('#fourth').css('display','block');
                $("#fourth").fadeOut(00)
                $("#fourth").fadeIn(4000);
                $("#fourth").fadeOut(4000)
                
                count = count + 1;
                break;
            default:
                $('#first').css('display','none');
                $('#second').css('display','none');
                $('#third').css('display','none');
                $('#fourth').css('display','none');
                count = 0;

        }
    },10000) 



  

    $('.download').click(function(e) {
        e.preventDefault();  //stop the browser from following
        window.location.href = '../Resumenew.pdf';
    });

    $('.top').click(function(e) {
        e.preventDefault();  //stop the browser from following
        window.scrollTo(0, 0);
    });
    
       
    
})