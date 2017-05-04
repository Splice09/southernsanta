$(document).ready(function(){
    /*
   ===================================================
   HANDLE THE 'S' CLICK EVENT
   ===================================================
   */
   $('#santa').click(function(){
       $('.borderLink').css('color', 'white');
       $(this).css('color', '#dfbc49');
       $('#home').css('color', '#d00008');
       $('.aboutContent').fadeOut('fast');
       $('.contactContent').fadeOut('fast');
       $('.photosContent').fadeOut('fast');
    });
   /*
   ===================================================
   HANDLE THE HOME CLICK EVENT
   ===================================================
   */
   $('#home').click(function(){
       $('.borderLink').css('color', 'white');
       $(this).css('color', '#d00008');
       $('.aboutContent').fadeOut('fast');
       $('.contactContent').fadeOut('fast');
       $('.photosContent').fadeOut('fast');
    });
    
    /*
    ===================================================
    HANDLE THE ABOUT CLICK EVENT
    ===================================================
    */
    $("#about").click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.contactContent').is(':visible'))
        {
            $('.contactContent').fadeOut('fast', function(){
                $('.aboutContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');               
            });
            noneVisible = false;
        }
        if($('.photosContent').is(':visible'))
        {
            $('.photosContent').fadeOut('fast', function(){
                $('.aboutContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');               
            });
            noneVisible = false;
        }
        if(noneVisible){
            $('.aboutContent').css({opacity: 0, display: 'flex'}).animate({
                opacity: 1
            }, 'fast'); 
        }  
    });
    
    
    /*
    ===================================================
    HANDLE THE CONTACT CLICK EVENT
    ===================================================
    */
    $('#contact').click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.aboutContent').is(':visible'))
        {
            $('.aboutContent').fadeOut('fast', function(){
                $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');                
            });
            noneVisible = false;
        }
        if($('.photosContent').is(':visible'))
        {
            $('.photosContent').fadeOut('fast', function(){
                $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');              
            });
            noneVisible = false;
        }
        if(noneVisible){
            $('.contactContent').css({opacity: 0, display: 'flex'}).animate({
                opacity: 1
            }, 'fast'); 
        } 
    });
    
    /*
    ===================================================
    HANDLE THE PHOTOS CLICK EVENT
    ===================================================
    */
    $('#photos').click(function(){
        $('.borderLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var noneVisible = true;
        
        if($('.aboutContent').is(':visible'))
        {
            $('.aboutContent').fadeOut('fast', function(){
                $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');           
            });
            noneVisible = false;
        }
        if($('.contactContent').is(':visible'))
        {
            $('.contactContent').fadeOut('fast', function(){
                $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');             
            });
            noneVisible = false;
        } 
        if(noneVisible){
            $('.photosContent').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 'fast');
        } 
       
    });
});