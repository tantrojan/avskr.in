var typed = new Typed(".type", {
  	
  	strings: ['Aavishkar', 'The Cradle of Innovation'],
  	stringsElement: null,
	typeSpeed: 3,
	startDelay: 1200,
	backSpeed: 20,
	backDelay: 500,
	loop: true,
	loopCount: Infinity,
	showCursor: false,
	cursorChar: "",
	attr: null,
	contentType: 'html',
});


$(document).ready(function(){

	var controller = new ScrollMagic.Controller();
	// Spaceship
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'#obj'
	})
	.setClassToggle('#obj', 'fade-in')
	.addIndicators()
	.addTo(controller);

	// About Us Detail
	var ourScene = new ScrollMagic.Scene({
		triggerElement:'#obj'
	})
	.setClassToggle('#obj', 'fade-in')
	.addIndicators()
	.addTo(controller);
})