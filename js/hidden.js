$(document).ready(function(){
    $('.article a').on('click', function(event){
        event.preventDefault();
        var $this = $(this);
        //$this.parent().find('.wrap_hidden').toggleClass('active');
        //$this.parent().find('.reviews_main').css('border', '1px solid #ff6400');
        $this.parent().find('.wrap_hidden').slideToggle(200);
        //$this.parent().find('.reviews_main').toggleClass('active');

    });
});