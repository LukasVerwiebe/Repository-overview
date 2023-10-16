$(document).ready(function(){
    $(window).scroll(function(){
        // Anzeigen des Menüs beim scrollen
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.navbar-new').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar-new').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slid-up Script Funktion
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Ein und Ausschalten des menu/navbar bei Veränderung der Bildschrimgröße
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});