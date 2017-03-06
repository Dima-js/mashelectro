$(document).ready(function(){
    $('.wrap_reviews_main a').on('click', function(event){
        event.preventDefault();
        var $this = $(this);
        //$this.parent().find('.wrap_hidden').toggleClass('active');
        //$this.parent().find('.reviews_main').css('border', '1px solid #ff6400');
        $this.parent().find('.wrap_hidden').slideToggle(200);
        //$this.parent().find('.reviews_main').toggleClass('active');

    });
});
//$(document).ready(function(){
//    $('.wrap_reviews_main').hover(function(event){
//        event.preventDefault();
//        var $this = $(this);
//        $this.parent().find('.reviews_main').toggleClass('active');
//        //$this.parent().css('border', '1px solid #ff6400');
//
//
//    });
//});





