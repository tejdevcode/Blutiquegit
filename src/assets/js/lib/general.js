let $ = jQuery.noConflict();

jQuery(document).ready(function () {
	/*navigation click down*/

	/*$('.dropdown_nav').on('click' , function(e){
		
		$(".dropdown_child").slideUp("fast").parent().removeClass('active');
		$(this).find('.dropdown_child').slideDown();
		$(this).addClass('active');
		console.log(2)
	});

	$(document).on("click", function(e){
        if($(e.target).parent().hasClass('dropdown_nav')){
        	$(e.target).next().slideDown().parent().addClass('active');
        	console.log(3)
        } else if(!$(e.target).parents().hasClass('dropdown_nav')){
        	$(".dropdown_child").slideUp("fast").parent().removeClass('active');
        }
        	console.log($(e.target).parents())
	});

	$('.dropdown_childtwo > a').on('click' , function(){
		$(this).parent().find('ul').slideDown();
	});
	$('.navback').on('click' , function(){
		$(this).parent().slideUp();
	});
	*/
	if(window.innerWidth > 991){
		/*dropdown nav js*/
		$('.dropdown_nav > a').on('click' , function(e){
			if($(this).parent().hasClass('active')){
				$(this).parent().find('.dropdown_child').slideUp();
				$(this).parent().removeClass('active');
			} else{
				$('.dropdown_child').slideUp().parent().removeClass('active');
				$(this).parent().find('.dropdown_child').slideToggle();
				$(this).parent().toggleClass('active');
			}
			$('.dropdown_childtwo').find('ul').slideUp();
		});

		/*drop down back*/
		$('.dropdown_childtwo > a').on('click' , function(){
			$(this).parent().find('ul').slideDown();
		});
		$('.navback').on('click' , function(){
			$(this).parent().slideUp();
		});

		/*other then nav item click js*/
		$(document).on("click", function(e){
			if(!$(e.target).parents().hasClass('dropdown_nav')){
				$(".dropdown_child").slideUp("fast").parent().removeClass('active');
			}	
		});

		/*login icon click nav*/
		$('.loginitem .closingico').click(function(){
			$(this).closest('.dropdown_child').slideUp();
			$(this).parents('.loginitem').removeClass('active');
		});
	}


	/*banner top slider*/
	$(".introallert_slider").on('init', function(event, slick) {
		$('.introallert_slidecount').append('<span class="current"></span> / <span class="total"></span>');
		$('.current').text(slick.currentSlide + 1);
		$('.total').text(slick.slideCount);
	}).slick({
		slidesToShow: 1,
		infinite:true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow:$('.introallert_arrowleft'),
		nextArrow:$('.introallert_arrowright')
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.current').text(nextSlide + 1);
	});

	$('.introallert_boxclose').click(function(){
		$(this).parent().slideUp();
	});


	/*hero slider*/
	$('.hero_slider').slick({
		slidesToShow: 1,
		infinite:true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false
	})

	/*quick links  slider*/
	$('.quicklink_slider').slick({
		slidesToShow: 5,
		infinite:true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4
			},
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 3
			},
		},
		{
			breakpoint: 575,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		],
	})

	/*spotlight slider*/
	$('.spotlight_slider').on('init', function(event, slick) {
		$('.spot_count').append('<span class="spotcurrent"></span> / <span class="spottotal"></span>');
		$('.spotcurrent').text(slick.currentSlide + 1);
		$('.spottotal').text(slick.slideCount);
	}).slick({
		slidesToShow: 1,
		infinite:true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 10000,
		arrows: true,
		prevArrow:$('.spot_arrowleft'),
		nextArrow:$('.spot_arrowright')
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.spotcurrent').text(nextSlide + 1);
	});

	/*footer accordian*/
	$('.acc-content').slideUp();
	$('.acc.active .acc-content').slideDown();
	$('.acc-head').on('click', function() {
		if($(this).parent().hasClass('active')) {
			$(this).siblings('.acc-content').slideUp();
			$(this).parent().removeClass('active');
		}
		else {
			if(window.innerWidth > 991){
				$(this).parents('.accordian_box').find('.acc-content').slideUp();
			$(this).parents('.accordian_box').find('.acc').removeClass('active');
		}
			$(this).siblings('.acc-content').slideToggle();
			$(this).parent().toggleClass('active');
		}
	});  

	/*mobile navegation*/
	$('.menuicon').click(function(){
		$('.mobilenav_bar').addClass('navon');
		$('body').addClass('mobnavon');
	});
	$('.mobnavbar_close').click(function(){
		$('.mobilenav_bar').removeClass('navon');
		$('body').removeClass('mobnavon');
		$('.mobnav_childbox , .mobnav_childonebox ').removeClass('childon');
	});

	$('.mobnav_child > a , .mobnav_childone > a').click(function(){
		$(this).next().addClass('childon');
	});
	$('.backnav').click(function(){
		$(this).parent().removeClass('childon');
	});
	$('.moblogin').click(function(){
		$('.mobilenav_loginbar').slideDown();
		$('body').addClass('mobnavon');
	});
	$('.mobnav_info .loginitem_close .closingico').click(function(){
		$('.mobilenav_loginbar').slideUp();
		$('body').removeClass('mobnavon');
	});









});