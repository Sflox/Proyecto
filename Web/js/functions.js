

$( document ).ready(function() {
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
DONT CHANGE ANY CODE UNDER THIS LINE - DONT CHANGE ANY CODE UNDER THIS LINE - DONT CHANGE ANY CODE UNDER THIS LINE
*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


// PRELOADER	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
// SCROLL REVEAL
	window.sr = new scrollReveal();


// PARALLAX IMAGES 
	$('#subscribe').parallax("50%", 0.0);
	
// SMOOTH SCROLL
	smoothScroll.init({
		speed: 900, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});
// CONTACT FORM
});