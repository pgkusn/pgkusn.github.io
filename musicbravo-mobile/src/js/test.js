$(function() {
    var $grid = $('.grid');
    // $grid.masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: 200
    // });
    $(document).off("click").on("click", "#page2", function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $grid.masonry('destroy');
        } else {
            $grid.masonry({
                itemSelector: '.grid-item',
                columnWidth: 200
            });
        }
    });
});