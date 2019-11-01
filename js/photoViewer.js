$(document).ready(function(){
    var tinyGif = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    
    //LOAD PHOTO URL BASED ON THUMBNAIL CLICK
    $('.thumbnail').click(function(){
        var thumbnailValue = $(this).data('value');
        var photoUrlValue = $(this).data('photo-url');

        $('.photoContainer').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
            }, 'fast', function(){
                $('.image').attr('src', photoUrlValue);
        });
        $('.photoCredit').css({opacity:0});
    });
    
    //CLEAR PHOTO SRC URL AND HIDE THE FRAME
    $('.photoContainer').click(function(){
        $('.photoCredit').css({opacity:1});
        $('.photoContainer').fadeOut('fast', function(){
             $('.image').attr('src', tinyGif);               
        });
    });
});