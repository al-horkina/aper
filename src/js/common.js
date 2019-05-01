(function ($) {
    $(document).ready(function () {
        $('.navbar a[href^="#"]').click( function(){
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
            }
            return false;
        });


        $(window).scroll(function(){
            const offset = $('#company').offset() ;
            if ($(this).scrollTop() > offset.top && $(this).scrollTop() < (offset.top + 20)  ) {
                $('#exampleModalLong').modal('show');
            }
        });




    })
})(jQuery);


