$(document).ready(function(){
    $(".nav-link").click(function(e){
        console.log("Nav clicked", new Date);
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.currentTarget.getAttribute("href")).offset().top
        }, 500);
        location.hash = e.currentTarget.getAttribute("href");
    });
});
