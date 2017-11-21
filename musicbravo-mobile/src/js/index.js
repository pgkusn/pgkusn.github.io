// =============================================================================
// init
// =============================================================================
// 輪播圖
$(".js-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoWidth: true,
    dotsContainer: ".owl-controls",
    autoplay: true,
    autoplayTimeout: 2840,
    smartSpeed: 750
});

// 限制文字長度(依據樣式高度)
limitWordLength();

// 定位文章標題
articleTitle();
