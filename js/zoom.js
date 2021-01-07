$(document).ready(function(){
    $(document).on('click', function () {
        if (!$(event.target).hasClass('zoom')) {
            $('.have-zoom').removeClass('have-zoom')
        } else {

            $('.have-zoom').not(event.target).removeClass('have-zoom');
            $(event.target).toggleClass('have-zoom');
        }
    })
});


