function animateTitle () {
	$('span').each(function(ind, elem) {
		$(this).on('mouseover', function() {
			elem.animate({
				opasity: [0.25, 1],
				color: ['#9932CC', ''],
				transform: 'rotate(360deg)',
			}, 5000);
			console.log(elem);
		});
		
	});
}
animateTitle ();