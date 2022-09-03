/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

//import $ from 'jquery';
//import whatInput from 'what-input';


//window.$ = $;


window.jQuery = window.$ = $;

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/dependencies';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = jQuery.noConflict();

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
	if (window.innerWidth > 991) {
		/*dropdown nav js*/
		$('.dropdown_nav > a').on('click', function (e) {
			if ($(this).parent().hasClass('active')) {
				$(this).parent().find('.dropdown_child').slideUp();
				$(this).parent().removeClass('active');
			} else {
				$('.dropdown_child').slideUp().parent().removeClass('active');
				$(this).parent().find('.dropdown_child').slideToggle();
				$(this).parent().toggleClass('active');
			}
			$('.dropdown_childtwo').find('ul').slideUp();
		});

		/*drop down back*/
		$('.dropdown_childtwo > a').on('click', function () {
			$(this).parent().find('ul').slideDown();
		});
		$('.navback').on('click', function () {
			$(this).parent().slideUp();
		});

		/*other then nav item click js*/
		$(document).on("click", function (e) {
			if (!$(e.target).parents().hasClass('dropdown_nav')) {
				$(".dropdown_child").slideUp("fast").parent().removeClass('active');
			}
		});

		/*login icon click nav*/
		$('.loginitem .closingico').click(function () {
			$(this).closest('.dropdown_child').slideUp();
			$(this).parents('.loginitem').removeClass('active');
		});
	}

	/*banner top slider*/
	$(".introallert_slider").on('init', function (event, slick) {
		$('.introallert_slidecount').append('<span class="current"></span> / <span class="total"></span>');
		$('.current').text(slick.currentSlide + 1);
		$('.total').text(slick.slideCount);
	}).slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: $('.introallert_arrowleft'),
		nextArrow: $('.introallert_arrowright')
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.current').text(nextSlide + 1);
	});

	$('.introallert_boxclose').click(function () {
		$(this).parent().hide();
	});

	/*hero slider*/
	$('.hero_slider').slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false
	});

	/*quick links  slider*/
	$('.quicklink_slider').slick({
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: true,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 750,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 575,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	});

	/*spotlight slider*/
	$('.spotlight_slider').on('init', function (event, slick) {
		$('.spot_count').append('<span class="spotcurrent"></span> / <span class="spottotal"></span>');
		$('.spotcurrent').text(slick.currentSlide + 1);
		$('.spottotal').text(slick.slideCount);
	}).slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 10000,
		arrows: true,
		prevArrow: $('.spot_arrowleft'),
		nextArrow: $('.spot_arrowright')
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.spotcurrent').text(nextSlide + 1);
	});

	/*footer accordian*/
	$('.acc-content').slideUp();
	$('.acc.active .acc-content').slideDown();
	$('.acc-head').on('click', function () {
		if ($(this).parent().hasClass('active')) {
			$(this).siblings('.acc-content').slideUp();
			$(this).parent().removeClass('active');
		} else {
			if (window.innerWidth > 991) {
				$(this).parents('.accordian_box').find('.acc-content').slideUp();
				$(this).parents('.accordian_box').find('.acc').removeClass('active');
			}
			$(this).siblings('.acc-content').slideToggle();
			$(this).parent().toggleClass('active');
		}
	});

	/*mobile navegation*/
	$('.menuicon').click(function () {
		$('.mobilenav_bar').addClass('navon');
		$('body').addClass('mobnavon');
	});
	$('.mobnavbar_close').click(function () {
		$('.mobilenav_bar').removeClass('navon');
		$('body').removeClass('mobnavon');
		$('.mobnav_childbox , .mobnav_childonebox ').removeClass('childon');
	});

	$('.mobnav_child > a , .mobnav_childone > a').click(function () {
		$(this).next().addClass('childon');
	});
	$('.backnav').click(function () {
		$(this).parent().removeClass('childon');
	});
	$('.moblogin').click(function () {
		$('.mobilenav_loginbar').slideDown();
		$('body').addClass('mobnavon');
	});
	$('.mobnav_info .loginitem_close .closingico').click(function () {
		$('.mobilenav_loginbar').slideUp();
		$('body').removeClass('mobnavon');
	});
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTYzYjQ1YWNlZTRiYzJkNzVmMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9saWIvZ2VuZXJhbC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJqUXVlcnkiLCIkIiwibm9Db25mbGljdCIsImRvY3VtZW50IiwicmVhZHkiLCJpbm5lcldpZHRoIiwib24iLCJlIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJmaW5kIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsInNsaWRlRG93biIsInRhcmdldCIsInBhcmVudHMiLCJjbGljayIsImNsb3Nlc3QiLCJldmVudCIsInNsaWNrIiwiYXBwZW5kIiwidGV4dCIsImN1cnJlbnRTbGlkZSIsInNsaWRlQ291bnQiLCJzbGlkZXNUb1Nob3ciLCJpbmZpbml0ZSIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwibmV4dFNsaWRlIiwiaGlkZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJkb3RzIiwic2libGluZ3MiLCJhZGRDbGFzcyIsIm5leHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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RUFBZWlCLEtBQWYsQ0FBcUIsWUFBVTtBQUM5QmpCLElBQUUscUJBQUYsRUFBeUJjLFNBQXpCO0FBQ0FkLElBQUUsTUFBRixFQUFVd0MsUUFBVixDQUFtQixVQUFuQjtBQUNBLEVBSEQ7QUFJQXhDLEdBQUUsMkNBQUYsRUFBK0NpQixLQUEvQyxDQUFxRCxZQUFVO0FBQzlEakIsSUFBRSxxQkFBRixFQUF5QlUsT0FBekI7QUFDQVYsSUFBRSxNQUFGLEVBQVVXLFdBQVYsQ0FBc0IsVUFBdEI7QUFDQSxFQUhEO0FBYUEsQ0F6TUQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNjNiNDVhY2VlNGJjMmQ3NWYyYSIsIi8vaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuLy9pbXBvcnQgd2hhdElucHV0IGZyb20gJ3doYXQtaW5wdXQnO1xyXG5cclxuXHJcblxyXG4vL3dpbmRvdy4kID0gJDtcclxuXHJcblxyXG53aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSAkXHJcblxyXG4vLyBJZiB5b3Ugd2FudCB0byBwaWNrIGFuZCBjaG9vc2Ugd2hpY2ggbW9kdWxlcyB0byBpbmNsdWRlLCBjb21tZW50IG91dCB0aGUgYWJvdmUgYW5kIHVuY29tbWVudFxyXG4vLyB0aGUgbGluZSBiZWxvd1xyXG4vL2ltcG9ydCAnLi9saWIvZGVwZW5kZW5jaWVzJztcclxuaW1wb3J0ICcuL2xpYi9nZW5lcmFsLmpzJzsgXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2FwcC5qcyIsImxldCAkID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdC8qbmF2aWdhdGlvbiBjbGljayBkb3duKi9cclxuXHJcblx0LyokKCcuZHJvcGRvd25fbmF2Jykub24oJ2NsaWNrJyAsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHJcblx0XHQkKFwiLmRyb3Bkb3duX2NoaWxkXCIpLnNsaWRlVXAoXCJmYXN0XCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykuZmluZCgnLmRyb3Bkb3duX2NoaWxkJykuc2xpZGVEb3duKCk7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGNvbnNvbGUubG9nKDIpXHJcblx0fSk7XHJcblxyXG5cdCQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoJChlLnRhcmdldCkucGFyZW50KCkuaGFzQ2xhc3MoJ2Ryb3Bkb3duX25hdicpKXtcclxuICAgICAgICBcdCQoZS50YXJnZXQpLm5leHQoKS5zbGlkZURvd24oKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgXHRjb25zb2xlLmxvZygzKVxyXG4gICAgICAgIH0gZWxzZSBpZighJChlLnRhcmdldCkucGFyZW50cygpLmhhc0NsYXNzKCdkcm9wZG93bl9uYXYnKSl7XHJcbiAgICAgICAgXHQkKFwiLmRyb3Bkb3duX2NoaWxkXCIpLnNsaWRlVXAoXCJmYXN0XCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHRjb25zb2xlLmxvZygkKGUudGFyZ2V0KS5wYXJlbnRzKCkpXHJcblx0fSk7XHJcblxyXG5cdCQoJy5kcm9wZG93bl9jaGlsZHR3byA+IGEnKS5vbignY2xpY2snICwgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgndWwnKS5zbGlkZURvd24oKTtcclxuXHR9KTtcclxuXHQkKCcubmF2YmFjaycpLm9uKCdjbGljaycgLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5zbGlkZVVwKCk7XHJcblx0fSk7XHJcblx0Ki9cclxuXHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSl7XHJcblx0XHQvKmRyb3Bkb3duIG5hdiBqcyovXHJcblx0XHQkKCcuZHJvcGRvd25fbmF2ID4gYScpLm9uKCdjbGljaycgLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0aWYoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmRyb3Bkb3duX2NoaWxkJykuc2xpZGVVcCgpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9IGVsc2V7XHJcblx0XHRcdFx0JCgnLmRyb3Bkb3duX2NoaWxkJykuc2xpZGVVcCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bl9jaGlsZCcpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnLmRyb3Bkb3duX2NoaWxkdHdvJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKmRyb3AgZG93biBiYWNrKi9cclxuXHRcdCQoJy5kcm9wZG93bl9jaGlsZHR3byA+IGEnKS5vbignY2xpY2snICwgZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCd1bCcpLnNsaWRlRG93bigpO1xyXG5cdFx0fSk7XHJcblx0XHQkKCcubmF2YmFjaycpLm9uKCdjbGljaycgLCBmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnNsaWRlVXAoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qb3RoZXIgdGhlbiBuYXYgaXRlbSBjbGljayBqcyovXHJcblx0XHQkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRpZighJChlLnRhcmdldCkucGFyZW50cygpLmhhc0NsYXNzKCdkcm9wZG93bl9uYXYnKSl7XHJcblx0XHRcdFx0JChcIi5kcm9wZG93bl9jaGlsZFwiKS5zbGlkZVVwKFwiZmFzdFwiKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Lypsb2dpbiBpY29uIGNsaWNrIG5hdiovXHJcblx0XHQkKCcubG9naW5pdGVtIC5jbG9zaW5naWNvJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuZHJvcGRvd25fY2hpbGQnKS5zbGlkZVVwKCk7XHJcblx0XHRcdCQodGhpcykucGFyZW50cygnLmxvZ2luaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qYmFubmVyIHRvcCBzbGlkZXIqL1xyXG5cdCQoXCIuaW50cm9hbGxlcnRfc2xpZGVyXCIpLm9uKCdpbml0JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrKSB7XHJcblx0XHQkKCcuaW50cm9hbGxlcnRfc2xpZGVjb3VudCcpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+PC9zcGFuPiAvIDxzcGFuIGNsYXNzPVwidG90YWxcIj48L3NwYW4+Jyk7XHJcblx0XHQkKCcuY3VycmVudCcpLnRleHQoc2xpY2suY3VycmVudFNsaWRlICsgMSk7XHJcblx0XHQkKCcudG90YWwnKS50ZXh0KHNsaWNrLnNsaWRlQ291bnQpO1xyXG5cdH0pLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdGluZmluaXRlOnRydWUsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlTcGVlZDogNTAwMCxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdHByZXZBcnJvdzokKCcuaW50cm9hbGxlcnRfYXJyb3dsZWZ0JyksXHJcblx0XHRuZXh0QXJyb3c6JCgnLmludHJvYWxsZXJ0X2Fycm93cmlnaHQnKVxyXG5cdH0pLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XHJcblx0XHQkKCcuY3VycmVudCcpLnRleHQobmV4dFNsaWRlICsgMSk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5pbnRyb2FsbGVydF9ib3hjbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcclxuXHR9KTtcclxuXHJcblxyXG5cdC8qaGVybyBzbGlkZXIqL1xyXG5cdCQoJy5oZXJvX3NsaWRlcicpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdGluZmluaXRlOnRydWUsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlTcGVlZDogMTAwMDAsXHJcblx0XHRhcnJvd3M6IGZhbHNlXHJcblx0fSlcclxuXHJcblx0LypxdWljayBsaW5rcyAgc2xpZGVyKi9cclxuXHQkKCcucXVpY2tsaW5rX3NsaWRlcicpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogNSxcclxuXHRcdGluZmluaXRlOnRydWUsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdGF1dG9wbGF5OiBmYWxzZSxcclxuXHRcdGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcblx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRyZXNwb25zaXZlOiBbXHJcblx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDk5MSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDRcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDc1MCxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDNcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDU3NSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdF0sXHJcblx0fSlcclxuXHJcblx0LypzcG90bGlnaHQgc2xpZGVyKi9cclxuXHQkKCcuc3BvdGxpZ2h0X3NsaWRlcicpLm9uKCdpbml0JywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrKSB7XHJcblx0XHQkKCcuc3BvdF9jb3VudCcpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJzcG90Y3VycmVudFwiPjwvc3Bhbj4gLyA8c3BhbiBjbGFzcz1cInNwb3R0b3RhbFwiPjwvc3Bhbj4nKTtcclxuXHRcdCQoJy5zcG90Y3VycmVudCcpLnRleHQoc2xpY2suY3VycmVudFNsaWRlICsgMSk7XHJcblx0XHQkKCcuc3BvdHRvdGFsJykudGV4dChzbGljay5zbGlkZUNvdW50KTtcclxuXHR9KS5zbGljayh7XHJcblx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRpbmZpbml0ZTp0cnVlLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRhdXRvcGxheVNwZWVkOiAxMDAwMCxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdHByZXZBcnJvdzokKCcuc3BvdF9hcnJvd2xlZnQnKSxcclxuXHRcdG5leHRBcnJvdzokKCcuc3BvdF9hcnJvd3JpZ2h0JylcclxuXHR9KS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xyXG5cdFx0JCgnLnNwb3RjdXJyZW50JykudGV4dChuZXh0U2xpZGUgKyAxKTtcclxuXHR9KTtcclxuXHJcblx0Lypmb290ZXIgYWNjb3JkaWFuKi9cclxuXHQkKCcuYWNjLWNvbnRlbnQnKS5zbGlkZVVwKCk7XHJcblx0JCgnLmFjYy5hY3RpdmUgLmFjYy1jb250ZW50Jykuc2xpZGVEb3duKCk7XHJcblx0JCgnLmFjYy1oZWFkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZigkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHQkKHRoaXMpLnNpYmxpbmdzKCcuYWNjLWNvbnRlbnQnKS5zbGlkZVVwKCk7XHJcblx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKXtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy5hY2NvcmRpYW5fYm94JykuZmluZCgnLmFjYy1jb250ZW50Jykuc2xpZGVVcCgpO1xyXG5cdFx0XHQkKHRoaXMpLnBhcmVudHMoJy5hY2NvcmRpYW5fYm94JykuZmluZCgnLmFjYycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdFx0JCh0aGlzKS5zaWJsaW5ncygnLmFjYy1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7ICBcclxuXHJcblx0Lyptb2JpbGUgbmF2ZWdhdGlvbiovXHJcblx0JCgnLm1lbnVpY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5tb2JpbGVuYXZfYmFyJykuYWRkQ2xhc3MoJ25hdm9uJyk7XHJcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ21vYm5hdm9uJyk7XHJcblx0fSk7XHJcblx0JCgnLm1vYm5hdmJhcl9jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubW9iaWxlbmF2X2JhcicpLnJlbW92ZUNsYXNzKCduYXZvbicpO1xyXG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JuYXZvbicpO1xyXG5cdFx0JCgnLm1vYm5hdl9jaGlsZGJveCAsIC5tb2JuYXZfY2hpbGRvbmVib3ggJykucmVtb3ZlQ2xhc3MoJ2NoaWxkb24nKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLm1vYm5hdl9jaGlsZCA+IGEgLCAubW9ibmF2X2NoaWxkb25lID4gYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnY2hpbGRvbicpO1xyXG5cdH0pO1xyXG5cdCQoJy5iYWNrbmF2JykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NoaWxkb24nKTtcclxuXHR9KTtcclxuXHQkKCcubW9ibG9naW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLm1vYmlsZW5hdl9sb2dpbmJhcicpLnNsaWRlRG93bigpO1xyXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdtb2JuYXZvbicpO1xyXG5cdH0pO1xyXG5cdCQoJy5tb2JuYXZfaW5mbyAubG9naW5pdGVtX2Nsb3NlIC5jbG9zaW5naWNvJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5tb2JpbGVuYXZfbG9naW5iYXInKS5zbGlkZVVwKCk7XHJcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYm5hdm9uJyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvbGliL2dlbmVyYWwuanMiXSwic291cmNlUm9vdCI6IiJ9