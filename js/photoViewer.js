$(document).ready(function(){
    var photoUrls = [
        'http://i.imgur.com/jjt13WD.jpg'
        ,'http://i.imgur.com/O4bkw5q.jpg'
        ,'http://i.imgur.com/Ur03C5l.jpg'
        ,'http://i.imgur.com/E7zVb9o.jpg'
        ,'http://i.imgur.com/rAScQtY.jpg'
        ,'http://i.imgur.com/XHisZYy.jpg'
        ,'http://i.imgur.com/cwgwtmV.jpg'
        ,'http://i.imgur.com/PJ3Upzg.jpg'
        ,'http://i.imgur.com/Xlxvo1v.jpg'
        ,'http://i.imgur.com/LH4AZew.jpg'
        ,'http://i.imgur.com/9O6fLlH.jpg'
        ,'http://i.imgur.com/tdSUQ8c.jpg'
    ]
    $('.thumbnail').click(function(){
        var thumbnailValue = $(this).data('value');
        $('.photoContainer').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
            }, 'fast', function(){
                $('.image').attr('src', photoUrls[thumbnailValue]);
        });
        
        /*
        $('.photoContainer').fadeIn('fast', function(){
            $('.image').attr('src', photoUrls[thumbnailValue]);    
        });
        */
    });
    
    
    $('.photoContainer').click(function(){
        $('.photoContainer').fadeOut('fast', function(){
             $('.image').attr('src', '');               
        });
    });
});