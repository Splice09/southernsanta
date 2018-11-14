$(document).ready(function(){
    //OPEN GALLERY OF THUMBNAILS BASED ON ICON CLICK
    $('.numberLink').click(function(){
        $('.numberLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var galleryBoxId = $(this).data('value');
        if (galleryBoxId == 18){
            $('#gb17').hide();
            $('#gb16').hide();
        }
        else if (galleryBoxId == 17){
            $('#gb18').hide();
            $('#gb16').hide();
        }
        else{
            $('#gb18').hide();
            $('#gb17').hide();
        }
        $('#gb' + galleryBoxId).css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 'fast'); 
    });    
});