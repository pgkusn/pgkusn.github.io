// =============================================================================
// init
// =============================================================================
// 定位文章標題
articleTitle();

// 篩選列表
$("#accordion").accordion({
    active: false, // 預設全部摺疊
    collapsible: true, // 允許全部摺疊
    heightStyle: "content", // auto height
    icons: false // 停用預設icon
});

// =============================================================================
// event
// =============================================================================
// 切換排序方式
$(document).on("click", ".js-sortControl-item", function(event) {
    sortToggle($(event.currentTarget));
});

// 篩選列表-多選
$(document).off("click", ".js-multiple li").on("click", ".js-multiple li", function() {
    var $parent = $(this).parent();
    if ($(this).hasClass("js-all")) {
        $parent.find("li").removeClass("active");
        $(this).addClass("active");
    } else {
        $parent.find(".js-all").removeClass("active");
        $(this).toggleClass("active");

        // 如全部取消選取則選取"全部"
        var selected = $parent.find(".active").length;
        if (!selected) {
            $parent.find(".js-all").addClass("active");
        }
    }
});

// 顯示篩選列表
$(document).off("click", ".js-filter a").on("click", ".js-filter a", function() {
    $(".js-listControls").addClass("withFilter");
    $(".js-filterList").slideDown();
});

// 隱藏篩選列表
$(document).off("click", "#filterConfirm").on("click", "#filterConfirm", function() {
    $(".js-filterList").slideUp(function() {
        $(".js-listControls").removeClass("withFilter");
    });
});