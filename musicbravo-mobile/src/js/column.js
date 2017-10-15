// =============================================================================
// function
// =============================================================================
/** 判斷當前瀏覽器是否支援2x的圖
 *
 */
function isHighDensity() {
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}

/** 判斷當前瀏覽器是否支援3x的圖
 *
 */
function isRetina() {
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

/** match different media size image
 * 
 */
function matchMediaFunc(path, language) {
    try {
        // language = typeof language !== "undefined" ? language : true;
        var filename = (path.split("/")[path.split("/").length - 1]) || "";
        var prefix = (path.split(filename)[0]) || "";
        var postfix = (filename.split(".")[1]) || "";
        filename = (filename.split(".")[0]) || "";
        // 3x
        if (isRetina()) {
            filename += "@3x";
        }
        // 2x
        else if (isHighDensity()) {
            filename += "@2x";
        }
        // language
        // if (language) {
        //     filename = ($.config.LanguageSetting).toLowerCase() + "-" + filename;
        // }
        return prefix + filename + "." + postfix;
    } catch (error) {
        // if ($.config.debug)
        //     console.error(error);
        return path;
    }
}

// =============================================================================
// event
// =============================================================================
// 展開非會員人物介紹
$(document).on("click", ".main-musician.nonMember .js-main-musician-profile-link", function(event) {
    event.preventDefault();
    $(this).hide()
        .parents(".nonMember")
        .find(".js-dotdotdot").removeClass("js-dotdotdot").trigger("destroy");
});

// =============================================================================
// init
// =============================================================================
// 設定固定頂部標題文字
$("#fixedTop-text").text($(".main-title").text());

// 捲動時顯示/隱藏頂部
stickyTopBar();

// 限制文字長度(依據樣式高度)
limitWordLength();

// 設定專題封面背景圖(use ajax)
(function() {
    var coverPath = "http://musicbravo.blob.core.chinacloudapi.cn/musicbravo/1200x500.png";
    var coverBgPath = matchMediaFunc(coverPath, false);
    $("#banner-img").css("background-image", "url(" + coverBgPath + ")");
})();

// 依據裝置解析度替換文章圖片
$(".main img").each(function() {
    var path = $(this).attr("src");
    $(this).attr("src", matchMediaFunc(path, false));
});