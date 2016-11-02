function scrollInit() {
    var $first = $('#first');
    var headerHeight = $('header').height();
    var top = $first.innerHeight() - headerHeight;

    // 行內連結動畫
    $first.find('.btn').unbind('click').click(function(event) {
        event.preventDefault();
        $('body').animate({ scrollTop: top }, 1000);
    });

    // 收合header
    $(window).unbind('scroll').scroll(function() {
        var $this = $(this);

        if ($this.scrollTop() >= (top - headerHeight)) {
            $('body').addClass('is-header-hide');
            if ($this.scrollTop() >= top) {
                $('body').addClass('is-header-fixed');
            }
        } else {
            $('body').removeClass('is-header-fixed is-header-hide');
        }
    });
}

// 收合選單
(function() {
    $('#nav_on, nav:not(.inner)').click(function(event) {
        event.preventDefault();
        $('body').toggleClass('is-menu-visible');
    });
})();

// 載入頁面淡入動畫
(function() {
    setTimeout(function() {
        $('#first .inner').addClass('loaded');
    }, 100);

    setTimeout(function() {
        $('header').addClass('loaded');
    }, 1200);
})();

$(window).resize(scrollInit);

scrollInit();
