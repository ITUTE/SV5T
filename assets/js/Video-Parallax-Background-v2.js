$(document).ready(function(){

(function(){

	if(!('requestAnimationFrame' in window)) return;
	if(/Mobile|Android/.test(navigator.userAgent)) return;

	var backgrounds = [];

	$('.parallax').each(function(){
		var el = $(this);
		var bg = el.children('.parallax-background');
		bg.css({
			position: 'absolute',
			'min-width':'100%',
            'width':'auto',
            'min-height': '100vh',
			top:0, left:0,
			zIndex: -100,
            display: 'block'
		});
		backgrounds.push(bg);

		el.css({
			position:'relative',
			background:'transparent',
			overflow: 'hidden',
		});
	});

	if(!backgrounds.length) return;

})();
});