$(document).ready(function() { 
	
	//when hamburger clicked, toggle display to visible
	//and then hidden when clicked again
	$('#showNarrow').click(function() {
		$('#navNarrow').toggle();

	});
	
	//if window goes above media query breakpoint,
	//return navNarrow display to hidden
	$(window).resize(function() {

		if ($(window).width() >= 576) {
			$("#navNarrow").css("display", "none");
		}

	});
	

});



