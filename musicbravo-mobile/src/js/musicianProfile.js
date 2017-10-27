// =============================================================================
// variable
// =============================================================================
var $introduce = $(".js-introduce-content");
var introduceHeight = $introduce.innerHeight();
var $member = $("#members-list li");
var memberListHeight = 0;

// =============================================================================
// init
// =============================================================================
// 圖片改背景
$(".js-imgLiquid").imgLiquid();

// 設定介紹區塊高度
setIntroduceHeight();

// 依據成員數量變更樣式
if ($member.length > 4) {
    // 設定展開後的高
    var foldedHeight = $("#members-list").innerHeight();
    memberListHeight = foldedHeight + Math.floor($member.length / 4) * $member.outerHeight(true);
    
    // 顯示"展開/收起"按鈕
    $member.parents("section").find(".js-foldToggleWithTitle").addClass("active");
}

// =============================================================================
// function
// =============================================================================
/** 設定介紹區塊高度
 * 
 * @param {boolean} first 是否為首次設定
 */
function setIntroduceHeight(first = true) {
    var introduceHeight = 0;
    // 有介紹摘要
    if ($(".introduce-content-summary").length) {
        $(".introduce-content-summary li:lt(3)").each(function() {
            // 前三項高+下邊距
            introduceHeight += $(this).outerHeight(true);
        });
    }
    // 無介紹摘要
    else {
        // 三行高+段落下邊距
        introduceHeight = 76;
    }
    $introduce.css("max-height", introduceHeight);

    if (first) {
        introduceInit();
    } else {
        $introduce.one("transitionend", function() {
            introduceInit();
        });
    }
}

/** 限制文字長度
 * 
 */
function introduceInit() {
    limitWordLength(".js-introduce-content", function() {
        // 如果文字超過限制高度則顯示展開按鈕
        if ($introduce.hasClass("is-truncated")) {
            $("#introduce-foldToggleWithTitle").addClass("active");
        }
    });
}

// =============================================================================
// event
// =============================================================================
// 展開/收起隱藏區塊
$(document).off("click", ".js-foldToggleWithTitle").on("click", ".js-foldToggleWithTitle", function() {
    // 停用點擊事件
    $(this).addClass("disable");
    
    var $collapse = $(this).parents("section").find(".js-collapse");
    var type = $(this).data("type");
    switch (type) {
        case "member":
            if ($collapse.hasClass("unfold")) {
                $collapse.removeAttr("style");
            } else {
                $collapse.css("height", memberListHeight);
            }
            break;
    
        case "introduce":
            if ($collapse.hasClass("unfold")) {
                setIntroduceHeight(false);
            } else {
                $collapse.trigger("destroy")
                    .removeClass("js-dotdotdot")
                    .css("max-height", introduceHeight);
            }
            break;
        
        default:
            break;
    }
    $collapse.toggleClass("unfold");
    
    // 待展開/收起完畢後恢復點擊事件
    $collapse.one("transitionend", function() {
        $(this).removeClass("disable");
    }.bind(this));
});