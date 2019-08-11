window.onload = init;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("52F85132244E49368D6DFB6B2A376B5A");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib._90secGame();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();

    // =========================================================================
    // main
    // =========================================================================
    const GAMETIME = 90000;
    const DISTANCE = 8180.8;
    let currentTime = GAMETIME;
    let distanceLeft = DISTANCE;
    let ballTimer;
    let gameTimer;
    let position = 1;
    let isWin = false;
    let isLose = false;
    let bg = exportRoot.bg;
    let allBall = [];

    function keyupHandler(e) {
        if (e.keyCode === 39 || e.keyCode === 37) {
            position = e.keyCode === 39 ? 1 : -1;
            if (user.x >= 620 && position === 1) return; // 右邊界
            if (user.x <= 180 && position === -1) return; // 左邊界
            user.x += 55 * position;
        }
    }

    function displayTime(time) {
        time /= 1000;
        let min = Math.floor(time / 60);
        let sec = time % 60;
        return `${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}`;
    }

    // 取得隨機不重複陣列
    function getRanArr(beforeArr, total) {
        var newArr = [];
        for (var i = 0; i < total; i++) {
            var ran = Math.floor(Math.random() * beforeArr.length);
            newArr.push(beforeArr.splice(ran, 1)[0]); // 移出舊陣列數字到新陣列
        };
        return newArr;
    }
    
    function addBall() {
        if (distanceLeft < 800) return;

        let ballType = [
            new lib.Ball1(),
            new lib.Ball2(),
            new lib.Ball3()
        ];
        let ranBallPos = getRanArr([180, 290, 400, 510, 620], 2);
        let ranBallTypeIdx = getRanArr([0, 1, 2], 2);
        
        ranBallPos.forEach((val,idx) => {
            let typeIdx = ranBallTypeIdx[idx];
            ballType[typeIdx].x = val;
            ballType[typeIdx].y = 0;
            exportRoot.addChild(ballType[typeIdx]);
            allBall.push(ballType[typeIdx]);

            // 動畫及碰撞偵測
            createjs.Tween.get(ballType[typeIdx]).to({ y: DISTANCE }, GAMETIME)
                .call(() => exportRoot.removeChild(ballType[typeIdx]))
                .addEventListener('change', () => {
                    let collision = ndgmr.checkPixelCollision(ballType[typeIdx], user);
                    if (collision) isLose = true;
                });
        });
    }

    // 加入人物
    let user = new lib.User();
    user.x = 400;
    user.y = 370;

    // ticker
    let tickFn = function () {
        // 遊戲結束
        if (isWin) {
            document.querySelector('#win').classList.add('active');
        }
        if (isLose) {
            user.gotoAndPlay('lose');
            document.querySelector('#lose').classList.add('active');
        }
        if (isWin || isLose) {
            createjs.Tween.removeTweens(bg);
            allBall.forEach(ball => createjs.Tween.removeTweens(ball));
            document.removeEventListener('keyup', keyupHandler);
            createjs.Ticker.removeEventListener('tick', tickFn);
            clearInterval(ballTimer);
            clearInterval(gameTimer);
        }
    }
    createjs.Ticker.addEventListener('tick', tickFn);

    // 遊戲開始
    document.querySelector('#start').addEventListener('click', function () {
        this.style.display = 'none';
        exportRoot.addChild(user);
        document.addEventListener('keyup', keyupHandler);

        // 每4秒產生一排兩顆球
        ballTimer = setInterval(addBall, 4000);
        addBall();

        // 計算剩餘時間及距離
        gameTimer = setInterval(() => {
            currentTime -= 1000;
            document.querySelector('#time').textContent = displayTime(currentTime);
            distanceLeft = currentTime === 0 ? 0 : Math.floor(distanceLeft - DISTANCE / (GAMETIME / 1000));
        }, 1000);

        // 背景動畫
        createjs.Tween.get(bg).to({ y: DISTANCE }, GAMETIME).call(() => isWin = true);
    });

    // 重新開始
    document.querySelectorAll('.js-reset').forEach(el => {
        el.addEventListener('click', () => location.reload());
    })
}