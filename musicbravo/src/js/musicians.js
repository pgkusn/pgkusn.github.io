// =============================================================================
// init
// =============================================================================
// 定位文章標題
articleTitle();

// 切換排序方式
sortToggle();

// 限制文字長度
limitWordLength();

// 篩選列表
$("#accordion").accordion({
    active: false, // 預設全部摺疊
    collapsible: true, // 允許全部摺疊
    heightStyle: "content", // auto height
    icons: false // 停用預設icon
});

// 依據專長數量修改樣式
$(".musicianList-item-content-skill").each(function() {
    if ($(this).children().length >= 3) {
        $(this).addClass("max");
    }
});

// =============================================================================
// event
// =============================================================================
// 切換所在地-地區
$(document).off("click", ".js-areaOption").on("click", ".js-areaOption", function() {
    $(".js-area-content").removeClass("active");
    var area = $(this).data("area");
    if (area) {
        $("#" + area).addClass("active");
    }
});

// 篩選列表-單選
$(document).off("click", ".js-choice li").on("click", ".js-choice li", function() {
    if (!$(this).hasClass("active")) {
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
    }
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