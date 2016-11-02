// video
$('.videoWrap').each(function(index, el) {
	var $this = $(this),
		video = $this.find('video')[0],
	    $playBtn = $this.find('.playBtn'),
	    $progress = $this.find('.progress'),
	    $progressBar = $progress.children('.bar'),
	    $soundBtn = $this.find('.soundBtn'),
	    $centerBtn = $this.find('.centerBtn'),
	    $loading = $this.find('.loading');
	    
	// 按下播放鍵時
	$(this).find('video,.centerBtn,.playBtn').click(function() {
		$this.addClass('played');

		// 設定影片播放狀態
		if (video.paused) {
		    video.play();
		    $(video).addClass('playing');
		}
		else {
		    video.pause();
		    $(video).removeClass('playing');
		}

		// 改變播放鍵樣式
		$playBtn.toggleClass('pause');
		$centerBtn.toggleClass('pause');
	});

	// 播放時間更新時
	video.ontimeupdate=function(){
		// 依據播放時間改變進度條樣式
		var now = this.currentTime / this.duration * 100;
		$progressBar.css('width', now + '%');

		// 影片結束
		if (this.ended) {
		    $(this).removeClass('playing');
		    $playBtn.removeClass('pause');
		    $centerBtn.removeClass('pause');
			
		    // 返回影片開頭
			video.pause();
		    video.currentTime=0;
		}
	};

	// 影片載入後
	video.onloadedmetadata=function(){
		// 按下並拖動進度條
		$progress.mousedown(function(event) {
			var left = $(this).offset().left;

			// 設定影片播放時間
			function setTime(event) {
				var x = event.pageX - left; // 減去進度條與視窗的X距離，取得滑鼠相對於進度條點擊的位置
				var scale = x / $progress.width(); // 計算點擊位置與進度條總寬度的比例
				video.currentTime = video.duration * scale; // 設定新的影片播放時間(影片長度*比例)
			}

			// 拖動前暫停影片並改變播放鍵樣式
			video.pause();
			$playBtn.removeClass('pause');

			setTime(event);

			$(document).mousemove(function(event) {
				setTime(event);
			})
			// 鬆開滑鼠
			.mouseup(function() {
				// 播放影片並改變播放鍵樣式
				if ($('video').hasClass('playing')) {
				  video.play();
				  $playBtn.addClass('pause');
				}
				// 移除事件
				$(this).unbind('mousemove mouseup');
			});
		});
	};

	// 影片緩衝時顯示Loading圖片
	video.onwaiting=function(){
		$loading.show();
	};

	// 影片緩衝結束時隱藏Loading圖片
	video.onplaying=function(){
		$loading.hide();
	};

	// 按下靜音鍵
	$soundBtn.click(function() {
	  // 設定靜音鍵樣式
	  function setMutedStyle(argument) {
	    if (argument) {
	      $soundBtn.removeClass('fa-volume-up').addClass('fa-volume-off');
	    } else {
	      $soundBtn.removeClass('fa-volume-off').addClass('fa-volume-up');
	    }
	  }

	  // 設定影片靜音狀態
	  if (video.muted) {
	    video.muted = false;
	    setMutedStyle(false);
	  } else {
	    video.muted = true;
	    setMutedStyle(true);
	  }
	});

	// 針對IE改變video呈現方式(因IE不支援preload屬性)
	if (DetectIsIE() !== false) {
	    $(video).attr('poster', 'build/images/poster1.png');
	    $(this).addClass('played');
	}
});

//判斷是否為IE
function DetectIsIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // 回傳版本 <=10 的版本
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // 回傳版本 >=11 的版本
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // 判斷Edge
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

// 當瀏覽器寬度改變時，將#middle底下.wrap的高度設定成和底下.left的高度相同
(function(){
	var $middle=$('#middle'),
		$wrap=$middle.find('.wrap'),
		$left=$middle.find('.left'),
		$right=$middle.find('.right'),
		$twitter=$('#twitter .fa');

	function setHeight() {
		var h=$left.height();
		if(this.innerWidth>=768){
			$wrap.height(h);
			$right.height('inherit');
			$twitter.css('line-height', h+'px');
		}
		else{
			$wrap.height('auto');
			$right.height(h);
		}
	}

	window.onresize=setHeight;
	setHeight();
})();