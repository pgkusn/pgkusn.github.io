// =============================================================================
// init
// =============================================================================
// fullPage
$("main").fullpage({
    paddingTop: headerHeight + "px" // for fixed header
});

// 輪播圖
$(".js-carousel").owlCarousel({
    loop: true,
    dots: false,
    items: 3,
    center: true,
    margin: 30,
    autoWidth: true
});

// 改善輪播圖操作(避免左右切換時頁面上下滑動)
(function() {
    // ontouch時停止切頁
    $(document).on("touchstart touchend", ".js-carousel", function() {
        switch (event.type) {
            case "touchstart":
                $.fn.fullpage.setAllowScrolling(false);
                break;
            case "touchend":
                $.fn.fullpage.setAllowScrolling(true);
                break;
        }
    });

    // 上下滑動時執行切頁
    $(".js-carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction === "up") {
                $.fn.fullpage.moveSectionDown();
            } else if (direction === "down") {
                $.fn.fullpage.moveSectionUp();
            }
        },
        threshold: 0
    });
})();

// =============================================================================
// event
// =============================================================================
// fullPage rebuild
$(window).on("resize", function() {
    $.fn.fullpage.reBuild();
});

// 點擊向下切頁
$(document).on("click", "#section-downArrow", function() {
    $.fn.fullpage.moveSectionDown();
});