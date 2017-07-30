$(document).ready(function() { 

	

	$('#showNarrow').click(function() {
		$('#navNarrow').toggle();

	});
	

	$(window).resize(function() {

		if ($(window).width() >= 576) {
			$("#navNarrow").css("display", "none");
		}

	});


	


		


		
	



});




