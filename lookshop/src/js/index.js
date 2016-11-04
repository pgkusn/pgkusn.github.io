// slick
$('#slider').slick({
	autoplay:true,
	infinite: true,
	dots: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});

// 商品展示
(function(){
	$(window).load(function() {
		var $product=$('#product'),
			$wrap=$('.wrap'),
			$btn=$product.find('.rightCtrl a'),
			$loadMore=$('.loadMore'),
			li_width=$wrap.find('li').width(),
			index=0;

		function scrollProduct(obj){
			var	$ul=$wrap.find('ul.active'),
				wrapIndex=1,
				wrapWidth=0,
				offset=$product.width()-li_width,
				wrapLeft=(wrapIndex-1)*offset,
				bgColor=$(obj).children().css('backgroundColor');

			// 初始化
			$ul.css('left',0);
			$wrap.css('backgroundColor',bgColor);
			$product.find('select').css('backgroundColor',bgColor);
			$btn.removeClass('disable').filter('.left').addClass('disable');

			// 計算並設置ul的寬度
			$.each($ul.children(), function(index, val) {
				wrapWidth+=$(this).outerWidth(true);
			});
			$ul.css('width', wrapWidth);

			// 計算滾動至最右邊的位置
			var maxIndex=Math.ceil(wrapWidth/offset);

			$btn.unbind('click').click(function(event) {
				event.preventDefault();
					
				if($(this).hasClass('left')){
					if(wrapIndex > 1){
						wrapLeft+=offset;
						wrapIndex--;
						$ul.animate({left:wrapLeft});
						$btn.removeClass('disable');
						if(wrapIndex === 1){
							$(this).addClass('disable');
						}
					}
				}
				else{
					if(wrapIndex < maxIndex){
						wrapLeft-=offset;
						wrapIndex++;
						$ul.animate({left:wrapLeft});
						$btn.removeClass('disable');
						if(wrapIndex === maxIndex){
							$(this).addClass('disable');
						}
					}
				}
			});
		}

		function hideProduct(status) {
			if(status){
				$product.find('.shop').each(function(index, el) {
					$(this).children('li').hide()
						   .first().show()
						   .next().show();
				});
				$loadMore.addClass('active');
				$product.find('select').val(index);
			}
			else{
				$product.find('.shop li').show();
				$loadMore.removeClass('active');
			}
		}

		function hideClearence(status){
			if(status){
				$loadMore.addClass('active');
			}
			else{
				$loadMore.removeClass('active');
			}
			$('#clearence').find('.shop li').removeAttr('style');
		}

		function productStyle() {
			if(window.innerWidth<=640){
				hideProduct(true);
				hideClearence(true);
			}
			else{
				hideProduct(false);
				hideClearence(false);
			}
		}

		$product.find('.leftCtrl').on('mouseover click', 'li', function(event) {
			event.preventDefault();

			index=$(this).index();

			$(this).addClass('active')
				   .siblings()
				   .removeClass('active');
			
			$product.find('.wrap ul')
					.eq(index)
					.addClass('active')
					.siblings('ul')
					.removeClass('active');
			
			scrollProduct(this);
		});

		$product.find('select').change(function() {
			index=$(this).val();

			$product.find('.wrap ul')
					.eq(index)
					.addClass('active')
					.siblings()
					.removeClass('active');

			hideProduct(true);

			$product.find('.leftCtrl li').eq(index).mouseover();
		});

		$loadMore.click(function(event) {
			event.preventDefault();
			$(this).siblings('.shop.active').children('li:hidden').fadeIn();
			$(this).removeClass('active');
		});

		scrollProduct($product.find('.leftCtrl li.active'));
		productStyle();
	});
})();

// Mobile主選單
(function(){
	var $menuA=$('#menuA'),
		$wrap=$menuA.children('.wrap'),
		$backBtn=$('.fa-arrow-left');

	// 依選單內容長度設定外部容器高度(因內部元素為絕對定位)
	function setMenuaHeight() {
		$menuA.show(); // 將外部容器取消隱藏
		var h=$menuA.find('ul').height(); // 取得內容長度
		$menuA.height(h); // 設定外部容器高度
		$menuA.hide(); // 隱藏外部容器
	}

	// 切換至子選單
	$menuA.on('click', 'a', function(event) {
		var ul=$(this).siblings('ul');
		if(ul.length){
			event.preventDefault();
			var obj=ul.clone().addClass('next');
			$wrap.append(obj).animate({left:'-100%'});
			$backBtn.show();
		}
	});

	// 回到母選單
	$backBtn.click(function() {
		$wrap.animate({left: 0}, function() {
			$('ul.next').remove();
			$backBtn.hide();
		});
	});

	$(window).resize(function() {
		// 回到母選單
		$wrap.css('left', 0);
		$('ul.next').remove();
		$backBtn.hide();

		// 重設選單高度
		setMenuaHeight();
	});

	// 將有子選單的母選單上加入箭頭
	$menuA.find('.wrap>ul>li').each(function(index, el) {
		var $el=$(el);
		if($el.children('ul').length){
			$el.append('<a href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>');
		}
	});

	setMenuaHeight();
})();

// 調整底部選單樣式
$(window).resize(function() {
	if(window.innerWidth>640){
		$('footer .menu').removeAttr('style');
	}
});

// 顯示/隱藏選單
$('.menuBtn').click(function(event) {
	event.preventDefault();
	var $target=$($(this).attr('href'));
	$target.slideToggle();
});
