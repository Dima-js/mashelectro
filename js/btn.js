/**
 * Created by user on 29.12.2016.
 */

$(document).ready(function() {
    console.log('+++++');
    var $a=$('.style_menu li a');
    $(".style_menu>li>a").click(function(){

        $(".active").removeClass("active");//Удаляем класс у прошлого выделенного

        $(this).addClass("active");//добовляем класс

    });

});




$(document).ready(function(){
    var $menu = $('#myPanelDefault');
    var $m=$('#overlay');
    $('#menu-btn-toggle').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        $m.toggleClass('active');

    });
});

