/*------------------------------------
Go To Top Activation
--------------------------------------*/

function GoTop(){
	if ($(window).scrollTop() >= 500) {
		$('.go-top').addClass('show');
		$('.go-top').removeClass('hide');
	}
	else {
		$('.go-top').addClass('hide');
		$('.go-top').removeClass('show');
	}
};


/*------------------------------------
 Fixed Header Activation
 --------------------------------------*/

 function fixedheader() {
 	var header = document.getElementById("header");
 	var sticky = header.offsetTop;

 	if (window.pageYOffset > sticky) {
 		header.classList.add("top-fixed");
 	} else {
 		header.classList.remove("top-fixed");
 	}
 };


/*------------------------------------
 WoW Animation Activation
 --------------------------------------*/
 function wowActivate() {
 	new WOW().init();
 };

/*------------------------------------
 Document Ready Plugin Activation
 --------------------------------------*/
 $(document).ready(function () {
 	


 });

/*------------------------------------
 Windows On Load Plugin Activation
 --------------------------------------*/
 $(window).on('load', function () {
 	wowActivate();
 });


/*------------------------------------
 Windows On Load Plugin Activation
 --------------------------------------*/
 $(window).on('scroll', function () { 
 	GoTop(),
 	fixedheader();
 });