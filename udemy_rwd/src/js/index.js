// 捲動至指定區域
$(".js-nav").on("click", function(event) {
    event.preventDefault();
    var target = $(this).data("target");
    var top = $("#" + target).offset().top;
    $("html, body").animate({ scrollTop: top });
});