// =============================================================================
// variable
// =============================================================================
var headerHeight = 96;
var articlePos = null;
var titlePos = 0;

// =============================================================================
// function
// =============================================================================
/** 將超過限制字數的字換成省略號
 * 
 */
function limitWordNum() {
    $("[data-limit]").each(function() {
        var objString = $(this).text();
        var objLength = $(this).text().length;
        var num = $(this).data("limit");
        if (objLength > num) {
            $(this).text(objString.substring(0, num) + "...");
        }
    });
}

/** 限制文字長度(依據樣式高度)
 * @param {Object} select jQuery Selectors
 * @param {function} callback 回調函式
 */
function limitWordLength(select = ".js-dotdotdot", callback = function() {}) {
    $(select).dotdotdot({
        wrap: "letter",
        watch: "window",
        callback: callback
    });
}

/** 捲動時顯示/隱藏頂部
 * 
 */
function stickyTopBar() {
    var $fixedTop = $("#fixedTop");
    var lastScrollY = 0;

    if ($fixedTop.length) {
        $(window).on("scroll.stickyTopBar", function() {
            var st = $(this).scrollTop();
            // 向上捲動時顯示標題
            if (st < lastScrollY && st) {
                $fixedTop.removeClass("hidden");
            }
            // 向下捲動或回到頂部時隱藏標題
            else {
                $fixedTop.addClass("hidden");
            }
            lastScrollY = st;
        });
    }
}

/** 定位文章標題
 * 
 */
function articleTitle() {
    var $title = $("#articleTitle");
    var $article = $title.parents("article");
    articlePos = $article.offset();

    // 定位標題
    $title.css({
        top: articlePos.top,
        left: articlePos.left,
        right: $(window).width() - (articlePos.left + $article.outerWidth()),
    });
    $article.css("padding-top", $title.outerHeight());

    // 重新定位標題
    $(window).on("resize", function() {
        var lastArticle = {
            left: $article.offset().left,
            top: $article.offset().top
        };
        
        if (articlePos.left !== lastArticle.left) {
            articlePos.left = lastArticle.left;
        }
        if (articlePos.top !== lastArticle.top) {
            articlePos.top = lastArticle.top;
        }

        $title.css({
            top: articlePos.top,
            left: articlePos.left,
            right: $(window).width() - (articlePos.left + $article.outerWidth())
        });
    });

    // 固定標題
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > articlePos.top - headerHeight) {
            $title.addClass("fixed");
        } else {
            $title.removeClass("fixed");
        }
    });
}

/** 切換排序方式
 * 
 * @param {object} target 已點擊的排序元件(jQuery object)
 */
function sortToggle(target) {
    // 點擊原排列方式
    if (target.siblings("input:radio").prop("checked") === true) {
        // 切換升冪/降冪排序
        target.toggleClass("desc");
    }
    // 點擊另一種排列方式
    else {
        // 切換排列方式
        $("input[name=sort]:checked").prop("checked", false);
        target.siblings("input:radio").prop("checked", true);

        // 切換降冪排序
        if (!target.hasClass("desc")) {
            target.toggleClass("desc");
        }
    }
}

// =============================================================================
// event
// =============================================================================
// 回到頂部
$(document).off("click", ".js-backToTop").on("click", ".js-backToTop", function() {
    if ($(window).scrollTop() > titlePos && $(this).hasClass("js-midway")) {
        titlePos = articlePos.top - headerHeight + 1;
    } else {
        titlePos = 0;
    }
    $('html, body').animate({ scrollTop: titlePos }, 400, "easeOutQuad");
});

// 切換排列方式
$(document).off("change", "input[name=arrange]").on("change", "input[name=arrange]", function() {
    var display = $(this).val();
    $(".js-list").removeClass("chart list").addClass(display);
});