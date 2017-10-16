// =============================================================================
// variable
// =============================================================================
var $creation = $("#group-list li");
var groupListHeight = 0;

// =============================================================================
// init
// =============================================================================
// 依據工種數量變更樣式
if ($creation.length <= 4) {
    // 不須展開顯示
    $("#group-list").addClass("less");
} else {
    // 須展開顯示，設定展開後的高
    var foldedHeight = $("#group-list").innerHeight();
    groupListHeight = foldedHeight + Math.floor($creation.length / 4) * $creation.outerHeight(true);
}

// 圖片改背景
$(".js-imgLiquid").imgLiquid();

// 歌曲簡介頁籤
$("#main-content").tabs();

// 捲動時顯示/隱藏頂部
stickyTopBar();

// 限制文字字數
limitWordNum();

// 星星評分
$(".js-rating").rating();
$(".filled-stars").css("width", "70%");

// =============================================================================
// event
// =============================================================================
// 展開/收起顯示
$(document).on("click", ".js-foldToggle", function() {
    // 解綁視窗捲動事件
    $(window).off("scroll.stickyTopBar");

    var $collapse = $(this).parents("article").find(".js-collapse");
    $collapse.toggleClass("unfold");
    switch ($collapse.attr("id")) {
        case "main-content":
            // 歌曲簡介
            $collapse.slideToggle(function() {
                // 當動畫結束後重新綁定視窗捲動事件
                stickyTopBar();
            });
            break;
        case "group-list":
            // 製作團隊
            if ($collapse.hasClass("unfold")) {
                $collapse.css("height", groupListHeight);
            } else {
                $collapse.removeAttr("style");
            }
            // 當動畫結束後重新綁定視窗捲動事件
            $collapse.one("transitionend", function() {
                stickyTopBar();
            });
            break;
        default:
            break;
    }
});

// 按下播放/暫停鍵
$(document).on("click", ".js-playBtn", function() {
    // 控制播放/暫停/切換歌曲
    var audio = $("audio")[0];
    if ($(this).hasClass("playing")) {
        // 同一首歌曲(播放/暫停)
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        // 另一首歌曲(切換後播放)
        audio.src = $(this).parents(".js-songWrap").data("songlink");
        audio.play();
    }

    // 變更單曲頁播放鍵樣式
    if (!$(this).hasClass("playing")) {
        $(".js-playBtn").removeClass("playing pause");
    }
    $(this).addClass("playing").toggleClass("pause");

    // 變更播放器播放鍵樣式
    if (audio.paused) {
        $(".js-player-play-btn").removeClass("pause");
    } else {
        $(".js-player-play-btn").addClass("pause");
    }
    
    // 顯示播放器
    $(".js-player").addClass("active");
});