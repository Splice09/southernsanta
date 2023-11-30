$(document).ready(function(){
    //OPEN GALLERY OF THUMBNAILS BASED ON ICON CLICK
    $('.numberLink').click(function(){
        $('.numberLink').css('color', 'white');
        $(this).css('color', '#d00008');
        var galleryBoxId = $(this).data('value');
        if (galleryBoxId == 23){
            $('#gb22').hide();
            $('#gb21').hide();
            $('#gb19').hide();
            $('#gb18').hide();
            $('#gb17').hide();
            $('#gb16').hide();
        }
        if (galleryBoxId == 22){
            $('#gb23').hide();
            $('#gb21').hide();
            $('#gb19').hide();
            $('#gb18').hide();
            $('#gb17').hide();
            $('#gb16').hide();
        }
        else if (galleryBoxId == 21){
            $('#gb23').hide();
            $('#gb22').hide();
            $('#gb19').hide();
            $('#gb18').hide();
            $('#gb17').hide();
            $('#gb16').hide();
        }
        else if (galleryBoxId == 19){
            $('#gb23').hide();
            $('#gb22').hide();
            $('#gb21').hide();
            $('#gb18').hide();
            $('#gb17').hide();
            $('#gb16').hide();
        }
        else if (galleryBoxId == 18){
            $('#gb23').hide();
            $('#gb22').hide();
            $('#gb21').hide();
            $('#gb19').hide();
            $('#gb17').hide();
            $('#gb16').hide();
        }
        else if (galleryBoxId == 17){
            $('#gb23').hide();
            $('#gb22').hide();
            $('#gb21').hide();
            $('#gb19').hide();
            $('#gb18').hide();
            $('#gb16').hide();
        }
        else{
            $('#gb23').hide();
            $('#gb22').hide();
            $('#gb21').hide();
            $('#gb19').hide();
            $('#gb18').hide();
            $('#gb17').hide();
        }
        $('#gb' + galleryBoxId).css({opacity: 0, display: 'flex'}).animate({
            opacity: 1
        }, 'fast'); 
    });    
});