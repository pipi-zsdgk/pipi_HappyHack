$(function($){
    $('.bg-switcher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });

    $(window).scroll(function (){
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein').css('opacity','1');
            $('.fadein').css('transform','translateY(0)');
        }
    });

    $('.images').slick({  
        arrows: true,   
        autoplay: false,  
        dots: true,  
        centerMode: false, 
        centerPadding: '40%', 
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: 'slide-dots'
    });

});