$(document).ready(function() {
	var images = ["blob:https%3A//mail.google.com/d668db9d-6eed-43d6-b4bf-52be7bdd108e",
		"http://cdn.hitfix.com/photos/6127799/Star-Wars-countdown--Kylo-Ren-lightsaber.png",
		"http://lolworthy.com/wp-content/uploads/2015/10/kylo-ren-comic.jpg",
		"http://i.imgur.com/cEAgAol.jpg",
		"http://i.imgur.com/5K4nFpG.jpg",
		"https://s-media-cache-ak0.pinimg.com/736x/15/c7/55/15c755ed2af6707080efdc146e06767f.jpg",
		"https://metrouk2.files.wordpress.com/2014/06/biddy6.jpg",
		"http://scene7.targetimg1.com/is/image/Target/21406959?wid=480&hei=480",
		"http://www.thefunnyblog.org/wp-content/uploads/2009/06/starwars-550x403.jpg",
	];
	$('.sith').on('click', function() {
	 	$('h1, .g2g, .hoge').css({ "color" : "#cc0000" });
	 	$('h1').html("LOLJK I'M KYLO REN");
	 	$('html').css({
	 		"background": "url(sith.jpg) no-repeat center center fixed",
			"-webkit-background-size": "cover",
			"-moz-background-size": "cover",
			"-o-background-size": "cover",
			"background-size": "cover"});
	 	$('.fixed-fast').html('<img src="kylo2.jpg">');
	 	$('.fasterest').html('<img src="kylo.jpg">');
	 	$('p, .song').on('mouseover', function() {
	 		$(this).html('<img src="' + images[Math.floor(Math.random() * images.length)] + '">');
	 		$(this).unbind("mouseover");
	 	});
	});
});