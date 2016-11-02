$(function(){
	$('.slide .inner').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
	});

	$('.msg').slick({
		dots: true
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
});