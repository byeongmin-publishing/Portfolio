$(document).ready(function(){
    $("#burger_menu").click(function(event){

        var menu = $("#mobile-main_menu");

        event.preventDefault();
        $(this).toggleClass("on");

        menu.stop().slideToggle();
    })
});