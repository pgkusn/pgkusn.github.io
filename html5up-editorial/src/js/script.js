// 如瀏覽裝置為 Android 則增加樣式以隱藏 Chrome for Android 捲軸(bug)
(function(){
	function checkserAgent() {
	    var userAgentInfo = navigator.userAgent;
	    var flag = false;
	    if (userAgentInfo.indexOf("Android") !== -1) {
	    	flag = true;
	 	}
		return flag;
	}
	if (checkserAgent()) {
		$('body').addClass('android');
	}
})();

// 側邊欄
(function(){
	var body=$('body')[0],
		$sidebar = $('#sidebar'),
		$inner=$sidebar.find('.inner'),
		offset=$inner.height() - window.innerHeight;

	// 點擊按鈕時顯示/隱藏側邊欄
	$('#toggle').click(function(event) {
	    event.preventDefault();
	    $sidebar.toggleClass('inactive');
	});

	// 點擊 #main 區塊時隱藏側邊欄
	$('#main').click(function(event) {
	    var inactive = $sidebar.hasClass('inactive'),
	        pos = $sidebar.css('position');

	    if (!inactive && pos === 'fixed') {
	        $sidebar.addClass('inactive');
	    }
	});

	// 依視窗寬度顯示/隱藏側邊欄
	function setSidebarAct(){
		if(window.innerWidth < 1280){
			$sidebar.addClass('inactive');
		}
		else{
			$sidebar.removeClass('inactive');
		}
	}

	// 調整側邊欄位置
	function setSidebarPos(){
		if(window.innerWidth >= 1280){
			if(body.scrollTop >= offset+30){
				$inner.css({
					position: 'fixed',
					bottom: 0
				});
			}
			else{
				$inner.css({
					position: 'relative',
					bottom: 'auto'
				});
			}
		}
	}

	window.onresize=function(){
		setSidebarAct();
		setSidebarPos();
	};
	window.onscroll=setSidebarPos;

	setSidebarAct();
	setSidebarPos();
})();
