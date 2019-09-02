


$(document).ready(function(){
    
		$('.burger-btn').on('click', function(e) {
		  e.preventDefault;
		  $(this).toggleClass('burger-btn_active');

		  	if (!$('nav').hasClass('burger-nav_active')) { 
    				$('nav').addClass('burger-nav_active');
    				$('.header-container').addClass('burger-header-container_active'); 
    				$('header').addClass('burger-header_active');
    				$('.menu').addClass('burger-menu_active');
    				console.log('First click');
 				 } else { 
  				$('nav').removeClass('burger-nav_active');
  				$('.header-container').removeClass('burger-header-container_active'); 
    			$('header').removeClass('burger-header_active');
    			$('.menu').removeClass('burger-menu_active');
    			console.log('Second click'); 
				}
		});


		$('.galery-holder').slick({
		    responsive: [
		    	{
		    		breakpoint: 10000,
				      settings: "unslick"
		    	},
		    	{
		    		breakpoint: 700,
				      settings: {
				      		arrows: false,
							  infinite: true,
							  speed: 300,
							  slidesToShow: 1,
							  adaptiveHeight: true
				      }
		    	}
		    ]
		  });

});

$(window).scroll(function() {

    if ( $(window).scrollTop() >= 100 ) {
        $('header').addClass('header_scrolled');
    
    } else {
        $('header').removeClass('header_scrolled');

    }
});

