// menu隨螢幕滾動效果
(function() {
    var $window = $(window),
        $menu = $('#menu'),
        $cart = $('#cart'),
        offset = 0,
        maxOffset = 0,
        marginTop = 10, // 滾動時menu與視窗頂部的距離
        paddingTop = 48; // #cart>.wrap padding-top

    function init() {
        var menuTop = $cart.offset().top + paddingTop;

        if (window.innerWidth >= 480 && window.innerWidth < 600) {
            // 計算offset最大限制
            var bottomTop = $('.bottom').offset().top;
            var menuHeight = $menu.height();
            maxOffset = bottomTop - menuHeight;

            $window.on('scroll', function() {
                var winTop = $window.scrollTop();

                if (menuTop <= winTop) {
                    offset = winTop + marginTop;
                    // menu到達最底部的位置
                    if (winTop >= maxOffset - marginTop) {
                        offset = maxOffset;
                    }
                } else {
                    offset = menuTop;
                }

                $menu.offset({ top: offset });
            });
        } else {
            $window.unbind('scroll');
            $menu.offset({ top: menuTop });
        }
    }

    $window.on('resize', init);

    init();
})();
