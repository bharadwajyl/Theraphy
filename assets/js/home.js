//CALL 'package' USING package("package_name", "package_type", "message if applicable");
owl_carousel();
function owl_carousel() {
    $('header .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                stagePadding: 0,
            }
        }
    });
    let owl = $("header .owl-carousel");
    owl.owlCarousel();
    owl.on("changed.owl.carousel", function (event) {
        $("header .owl-carousel figcaption").hide();
        $("header .owl-carousel figcaption").show();
    });
}


$(document).ready(function(){
    $(".accordions li:first-child").addClass("active");
    $(".accordions li:first-child").children("p").show();
});

//ACCORDIONS
$(".accordions li").on("click", function() {
    if ($(this).hasClass("active")){
        $(".accordions li").children("p").hide("slow"); 
        $(".accordions li").removeClass("active");  
    } else {
        $(".accordions li").children("p").hide("slow");
        $(".accordions li").removeClass("active");
        $(this).addClass("active");
        $(this).children("p").show("slow");
    }
});
