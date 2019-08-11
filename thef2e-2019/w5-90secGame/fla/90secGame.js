(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"90secGame_atlas_", frames: [[1314,1070,110,110],[1404,696,110,110],[1404,808,110,110],[1202,1070,110,110],[1202,898,130,170],[1389,0,130,230],[1389,232,130,230],[1389,464,130,230],[1202,0,185,230],[1202,232,185,230],[1202,464,185,230],[1202,696,200,200],[0,902,1200,121],[0,1025,1200,121],[0,0,1200,900],[1334,920,90,74]]}
];


// symbols:



(lib.Ball_01 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ball_02 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Ball_03 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ball_04 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.duck_lose = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.duck_normal_01 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.duck_normal_02 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.duck_normal_03 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.duck_super_01 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.duck_super_02 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.duck_super_03 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Goal = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.img_frame1 = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.img_frame = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.img_BG = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.SuperStar = function() {
	this.initialize(ss["90secGame_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.User = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{move:12,"super":36,lose:60});

	// timeline functions:
	this.frame_35 = function() {
		this.gotoAndPlay('move');
	}
	this.frame_59 = function() {
		this.gotoAndPlay('super');
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(24).call(this.frame_59).wait(1).call(this.frame_60).wait(1));

	// user
	this.instance = new lib.duck_normal_01();
	this.instance.parent = this;
	this.instance.setTransform(-65,0);

	this.instance_1 = new lib.duck_normal_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,0);

	this.instance_2 = new lib.duck_normal_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64,1);

	this.instance_3 = new lib.duck_normal_03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-65,0);

	this.instance_4 = new lib.duck_super_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-88,0);

	this.instance_5 = new lib.duck_super_02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-90,0);

	this.instance_6 = new lib.duck_super_03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-96,0);

	this.instance_7 = new lib.duck_lose();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-65,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-65,y:0}}]},18).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{x:-64,y:1}}]},6).to({state:[{t:this.instance_1,p:{x:-65,y:0}}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_7}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,0,193,231);


(lib.Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SuperStar();
	this.instance.parent = this;
	this.instance.setTransform(-45,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Star, new cjs.Rectangle(-45,-74,90,74), null);


(lib.Goal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Goal();
	this.instance.parent = this;
	this.instance.setTransform(-100,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Goal_1, new cjs.Rectangle(-100,-200,200,200), null);


(lib.bgall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.img_BG();
	this.instance.parent = this;
	this.instance.setTransform(0,-5319,0.6667,0.6667);

	this.instance_1 = new lib.img_BG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-4719,0.6667,0.6667);

	this.instance_2 = new lib.img_BG();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-4119,0.6667,0.6667);

	this.instance_3 = new lib.img_BG();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-3519,0.6667,0.6667);

	this.instance_4 = new lib.img_BG();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-2919,0.6667,0.6667);

	this.instance_5 = new lib.img_BG();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-2319,0.6667,0.6667);

	this.instance_6 = new lib.img_BG();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-1719,0.6667,0.6667);

	this.instance_7 = new lib.img_BG();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-1119,0.6667,0.6667);

	this.instance_8 = new lib.img_BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-519,0.6667,0.6667);

	this.instance_9 = new lib.img_frame();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-5400,0.6667,0.6665);

	this.instance_10 = new lib.img_BG();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,81,0.6667,0.6667);

	this.instance_11 = new lib.img_BG();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,681,0.6667,0.6667);

	this.instance_12 = new lib.img_BG();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,1281,0.6667,0.6667);

	this.instance_13 = new lib.img_BG();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,1881,0.6667,0.6667);

	this.instance_14 = new lib.img_BG();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,2481,0.6667,0.6667);

	this.instance_15 = new lib.img_BG();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,3081,0.6667,0.6667);

	this.instance_16 = new lib.img_BG();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,3681,0.6667,0.6667);

	this.instance_17 = new lib.img_BG();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,4281,0.6667,0.6667);

	this.instance_18 = new lib.img_frame1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,5481,0.6667,0.6665);

	this.instance_19 = new lib.img_BG();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,4881,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgall, new cjs.Rectangle(0,-5400,800,10961.7), null);


(lib.Ball4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ball_04();
	this.instance.parent = this;
	this.instance.setTransform(-55,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball4, new cjs.Rectangle(-55,-110,110,110), null);


(lib.Ball3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ball_03();
	this.instance.parent = this;
	this.instance.setTransform(-55,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball3, new cjs.Rectangle(-55,-110,110,110), null);


(lib.Ball2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ball_02();
	this.instance.parent = this;
	this.instance.setTransform(-55,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball2, new cjs.Rectangle(-55,-110,110,110), null);


(lib.Ball1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ball_01();
	this.instance.parent = this;
	this.instance.setTransform(-55,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball1, new cjs.Rectangle(-55,-110,110,110), null);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.goal = new lib.Goal_1();
	this.goal.name = "goal";
	this.goal.parent = this;
	this.goal.setTransform(0,-10662,1,1,0,0,0,0,-100);

	this.instance = new lib.bgall();
	this.instance.parent = this;
	this.instance.setTransform(0,-2781.2,1,1,0,0,0,400,2780.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.goal}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bg, new cjs.Rectangle(-400,-10962,800,10961.7), null);


// stage content:
(lib._90secGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bg = new lib.Bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(400,-2180.85,1,1,0,0,0,0,-2781.2);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,-10061.6,400,10661.6);
// library properties:
lib.properties = {
	id: '52F85132244E49368D6DFB6B2A376B5A',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/90secGame_atlas_.png", id:"90secGame_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['52F85132244E49368D6DFB6B2A376B5A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;