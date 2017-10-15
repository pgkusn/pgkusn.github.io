// 輪播圖
var $carousel = $(".carousel");
var carouselLoaded = 0;

$carousel.owlCarousel({
    items: 1,
    autoWidth: true,
    dots: false,
});

var timer = setInterval(function() {
    $carousel.each(function() {
        if ($(this).hasClass("owl-loaded")) {
            $(this).find(".carousel-item.first").css("width", 400);
            $(this).find(".carousel-item.last").css("width", 200);
            carouselLoaded++;
        }
    });
    if(carouselLoaded === $carousel.length) {
        clearInterval(timer);
    }
}, 100);