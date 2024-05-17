$(function () {
	$(".next-project_box").slick({
		infinite: true,
  		speed: 300,
  		slidesToShow: 3,
  		arrows: true,
  		responsive: [
	      {
	        breakpoint: 1025,
	        settings: {
	        slidesToShow: 2,
	        },
	      },
	      {
	        breakpoint: 577,
	        settings: {
	          slidesToShow: 1,
	          arrows: false,
            infinite: false,
	        },
	      },
	    ],
	});
});
