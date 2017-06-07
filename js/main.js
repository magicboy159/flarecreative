$(document).ready(function() {
    var navOffset = $('.main-nav').offset().top;
    var navHeight = $('.main-nav').height();
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        
        $('.logo').css({'transform': 'translate(0px, '+wScroll/2+'px)'});

        if(wScroll >= navOffset) {
            $('.main-nav').addClass('fixed');
            $('html body').css({'padding-top': navHeight+'px'});
        } else {
            $('.main-nav').removeClass('fixed');
            $('html body').css({'padding-top': '0px'});
        }
    });
});