$(document).ready(function() {
    function updateNavbarBackground() {
        var $navbar = $('.navbar');
        
        if ($(window).width() <= 767) {
            if ($(this).scrollTop() > 50) {
                $navbar.addClass('bg-dark-scroll');
            } else {
                $navbar.removeClass('bg-dark-scroll');
            }
        } else {
            if ($(this).scrollTop() > 50) {
                $navbar.addClass('bg-dark-scroll');
            } else {
                $navbar.removeClass('bg-dark-scroll');
            }
        }
    }
    function togglenav(){
        var $navbar = $('.navbar');
        
        if ($(window).width() <= 767) {
            $navbar.addClass('bg-dark');
        }
    }

    $(window).on('resize scroll', function() {
        updateNavbarBackground();
    });

    $('.navbar-toggler').click(function() {
        togglenav();
    });
});
