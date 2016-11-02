// 'use strict';

// cart drop-down
(function(){
	var $cart=$('#cart');
	
	// 選單顯示/隱藏
	$('.toggle').click(function(event) {
		event.preventDefault();
		$cart.toggleClass('active');
	});

	// 選單展開時點擊任一處後隱藏
	$('body').click(function(event) {
		if($cart.height()>0 && !$(event.target).parents('#cart').length){
			$cart.removeClass('active');
		}
	});
})();

// desktop search
(function(){
	var $search=$('#search');

	// 顯示/隱藏搜索欄
	$('.searchBtn').click(function(event) {
		event.preventDefault();
		if($search.is(':visible')){
			$search.fadeOut('fast').find('input').val('');
		}
		else{
			$search.fadeIn('fast').find('input').focus();
		}
	});

	// 送出表單
	$search.find('.fa-search').click(function() {
		$search.find('form').submit();
	});

	// 按下ESC隱藏搜索欄
	$search.keydown(function(event) {
		if(event.which===27){
			$search.fadeOut('fast').find('input').val('');
		}
	});
})();

// slide
(function(){
	var index=0,
		offset=-100,
		$ctrl=$('.ctrl'),
		$ul=$ctrl.parents('.slide').find('ul'),
		total=$ul.children('li').length;

	$ctrl.on('click', 'a', function(event) {
		event.preventDefault();

		var $this=$(this);

		// 停用按鈕按下事件
		if($this.hasClass('disable')){
			return;
		}

		// 按下按鈕動畫
		switch($this.data('target')){
			case 'right':
				index++;
				break;
			case 'left':
				index--;
				break;
		}
		$ul.stop(true).animate({left: offset*index+'vw'});

		// 停用/啟用按鈕
		if(index===0 || index===(total-1)){
			$this.addClass('disable');
		}
		else{
			$ctrl.children('a').removeClass('disable');
		}
	});
})();

// menu tab
(function(){
	var $menu=$('#menu'),
		$content=$menu.find('.content>div');

	$menu.find('.nav').on('click', 'li', function(event) {
		event.preventDefault();

		var $this=$(this),
			index=$this.index();

		if($this.hasClass('active')) return;
		
		$content.eq(index).stop(true).fadeIn()
			    .siblings('div').fadeOut();

		$this.addClass('active')
			 .siblings('.active').removeClass('active');
	});
})();

// flexslider
$('.flexslider').flexslider({
	animation: "slide"
});

// fancybox
$(".fancybox").fancybox({
	openEffect	: 'none',
	closeEffect	: 'none'
})
// 移除邊框
.attr('rel', 'gallery')
.fancybox({
    padding : 0
});

// lazyload
$('.lazy').lazyload({
	effect : "fadeIn",
	threshold : 200
});

// Mobile主選單
(function(){
	var $nav=$('#nav'),
		$wrap=$nav.children('.wrap'),
		$back=$('#hidden .back').clone();

	// 選單顯示/隱藏
	$('.fa-bars').click(function(event) {
		event.preventDefault();
		$nav.stop(true).slideToggle('linear');
	});

	// 切換至子選單
	$nav.on('click', 'a', function(event) {
		var ul=$(this).siblings('ul');
		if(ul.length){
			event.preventDefault();
			var obj=ul.clone().addClass('next');
			$wrap.append(obj).animate({left:'-100%'});
			// 將子選單加入返回按鈕
			$('ul.next').prepend($back);
		}
	});

	// 回到母選單
	$nav.on('click', '.back', function(event) {
		event.preventDefault();
		$wrap.animate({left: 0}, function() {
			$('ul.next').remove();
		});
	});

	// 將有子選單的母選單上加入箭頭
	$nav.find('.wrap>ul>li').each(function(index, el) {
		var $el=$(el);
		if($el.children('ul').length){
			$el.children('a').addClass('next');
		}
	});

	// 依選單內容長度設定外部容器高度(因內部元素為絕對定位)
	$nav.show(); // 將外部容器取消隱藏
	var h=$nav.find('ul').height(); // 取得內容長度
	$nav.height(h); // 設定外部容器高度
	$nav.hide(); // 隱藏外部容器
})();