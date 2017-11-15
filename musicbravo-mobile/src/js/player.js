// player
$(".js-player").each(function() {
    var $this = $(this),
        audio = $this.find("audio")[0],
        $playBtn = $this.find(".js-player-play-btn"),
        progress = $this.find(".js-player-progress")[0],
        $progressBar = $this.find(".js-player-progress-bar"),
        $currentTime = $this.find(".js-player-currentTime"),
        $duration = $this.find(".js-player-duration"),
        searching = false;

    /** 設定播放時間
     * 
     */
    function setTime(event, left) {
        // 減去進度條與視窗的水平距離，取得滑鼠相對於進度條點擊的位置
        var x = event.touches[0].pageX - left;

        // 計算點擊位置與進度條總寬度的比例
        var scale = x / $(progress).width();

        // 改變進度條樣式
        var percent = scale >= 1 ? 100 : scale * 100;
        $progressBar.css("width", percent + "%");

        // 設定新的播放時間
        audio.currentTime = scale >= 1 ? audio.duration : audio.duration * scale;
    }

    /** 取得並顯示播放時間
     * 
     */
    function getTime() {
        if (audio.readyState) {
            var now = getTimeFormat(audio.currentTime);
            var total = getTimeFormat(audio.duration);
            $currentTime.text(now);
            $duration.text(total);
        }
    }

    /** 回傳時間格式
     * 
     */
    function getTimeFormat(sec) {
        // 在時間的個位數前方補零
        function padLeft(str, length) {
            str = "" + str;
            length = length || 2;

            if (str.length >= length) {
                return str;
            } else {
                return padLeft("0" + str, length);
            }
        }
        var sec = Math.floor(sec);
        var min = Math.floor(sec / 60);
        return padLeft(min) + ":" + padLeft(sec % 60);
    }

    /** 播放結束
     * 
     */
    function playFinished() {
        $playBtn.removeClass("pause");

        // 暫停並返回起始位置
        audio.pause();
        audio.currentTime = 0;
    }

    // 按下播放/暫停鍵
    $playBtn.on("click", function() {
        $playBtn.toggleClass("pause");
        $(".js-single .playing").toggleClass("pause");

        // 控制播放/暫停
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // 播放時間更新時
    audio.ontimeupdate = function() {
        if (!searching) {
            // 改變進度條樣式
            var percent = this.currentTime / this.duration * 100;
            $progressBar.css("width", percent + "%");

            // 播放結束時
            if (this.ended) {
                playFinished();
            }
        }

        getTime();
    };

    // 音樂載入後
    audio.onloadedmetadata = function() {
        // 按下進度條
        progress.addEventListener("touchstart", function(event) {
            searching = true;

            // 設定靜音
            audio.muted = true;

            setTime(event, $(this).offset().left);
        });

        // 拖曳進度條
        progress.addEventListener("touchmove", function(event) {
            setTime(event, $(this).offset().left);
        });

        // 放開進度條
        progress.addEventListener("touchend", function() {
            searching = false;

            // 取消靜音
            audio.muted = false;

            // 播放結束時
            if (audio.ended) {
                playFinished();
            }
        });

        getTime();
    };

    // 關閉播放器
    $(this).find(".js-player-close").on("click", function() {
        // 解綁視窗捲動事件
        $(window).off("scroll.stickyTopBar");
        
        // 變更單曲頁播放鍵樣式
        $(".js-playBtn").removeClass("pause playing");
        
        // 隱藏播放器
        $(this).removeClass("active");
        $("main").removeClass("playing");

        // 當播放器完全隱藏後
        $(this).one("transitionend", function() {
            playFinished();
            
            // 重新綁定視窗捲動事件
            stickyTopBar();
        });
    }.bind(this));
});