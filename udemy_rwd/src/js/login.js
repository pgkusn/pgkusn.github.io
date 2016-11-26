// input欄位背景控制
(function() {
    $('input').on('input', function() {
        var $this = $(this);
        if ($this.val()) {
            $this.addClass('no-bg');
        } else {
            $this.removeClass('no-bg');
        }
    });
})();
