$(document).ready(function() {
    $("#burger").click(function() {
        $(".menu").toggle(1000);
    });
    $("body").on('click', '[href*="#"]', function(e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
});