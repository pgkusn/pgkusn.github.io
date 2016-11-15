$('.msg').slick({
	dots: true
});

$('.content2 div.box').scrollex({
	enter(){
		$(this).addClass('fadeInRight');
	}
});

$(window).scroll(function(){
	var top=$(document).scrollTop();
	if(top>=183){
		$('nav').css({
			position:'fixed',
			top:'0',
			'z-index': '1000',
			width: '100%',
			'margin-top': '0'
		});
	}
	else{
		$('nav').css({
			position:'static',
			top:'auto',
			'z-index': 'auto',
			width: 'auto',
			'margin-top': '35px'
		});
	}
});
