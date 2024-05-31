(function($) {
	'use strict';

	var $window = $(window),
		$html = $('html');
	var fullPageCreated = false;
	$html.attr('data-fpenabled', false);

	function createFullpage() {
		if (fullPageCreated === false) {
			fullPageCreated = true;
			$('.container').fullpage({
				menu: '.navbox',
				autoScrolling:true,
				scrollHorizontally: true,
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,
				lazyLoading : true,
				anchors : ['firstPage', 'secondPage', '3rdPage', '4thPage'],
				verticalCentered : false,
				scrollOverflow : false,
				scrollingSpeed : 500,
				css3 : false,
				responsiveWidth : 1001,
				afterResponsive: function(isResponsive){
				
				},
				//easing : 'easeInOutExpo',
				//loopHorizontal : true,
				dragAndMove : true,
				sectionSelector: $('.container').children('.rowgroup')
			});
			//$.fn.fullpage.setAllowScrolling(false);
			$html.attr('data-fpenabled', true);
		}
	}
	$(function() {
		var $body = $('body'),
			$wrapper = $('#wrapper'),
			$container = $('#container'),
			$header = $('#header');

		$window.on('screen:wide screen:web', function(event) {
			var NowStatevertical = $.screen.settings.state[1];
			if(NowStatevertical=='maxheight'){
				createFullpage();
			}
		});
		$window.on('screen:tablet screen:phone', function(event) {
			if(fullPageCreated == true){
				fullPageCreated = false;
				$.fn.fullpage.destroy('all');
				$html.attr('data-fpenabled', false);
			}
		});
		$window.on('screen:maxheight', function(event) {
			window.Hmode = 'MaxHeight';
			$wrapper.attr('data-hsize', 'maxheight');
			var NowStatehorizontal = $.screen.settings.state[0];
			if(NowStatehorizontal=='wide' || NowStatehorizontal=='web'){
				createFullpage();
			}
		});
		$window.on('screen:minheight', function(event) {
			window.Hmode = 'MinHeight';
			$wrapper.attr('data-hsize', 'minheight');
			if(fullPageCreated == true){
				fullPageCreated = false;
				$.fn.fullpage.destroy('all');
				$html.attr('data-fpenabled', false);
			}
		});
		setTimeout(function(){
			if(Hmode === 'MinHeight') {
				$wrapper.attr('data-hsize', 'minheight');
			} else if(Hmode === 'MaxHeight'){
				$wrapper.attr('data-hsize', 'maxheight');
			}
		}, 1);


		// 공지사항
        var $Row1 = $('.rowgroup1'),
		$AptNoticeBox = $('.rowgroup1 .apt_notice_box');
        $AptNoticeBox.slick({
            
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots:true,
            arrows: true,
            prevArrow: $Row1.find('.prev'),
		    nextArrow: $Row1.find('.next'),
            variableWidth: true,
            infinite: false,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true
        });
		$window.on('load',function(){
			$('.apt_notice_list.page_on').removeClass('page_on');
		})


		// 우리동네 업그레이드 공동체소식
        var $Row2 = $('.rowgroup2'),
		$AptStoryList = $('.rowgroup2 .apt_story_list');
		$AptStoryList.on('init', function(event, slick, currentSlide){
			var $currentslide = $(slick.$slides[0]);
			$currentslide.addClass('fadeActive');
		});
        $AptStoryList.slick({            
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : false,
            dots:true,
            arrows: false,
            variableWidth: false,
			fade: true,
			zIndex: 5,
			speed: 1000,
            infinite: true,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true,
			//추가 기능
			autoArrow : $Row2.find('.pause'),
			isRunOnLowIE : false,
			pauseOnArrowClick : true,
			pauseOnDirectionKeyPush : true,
			pauseOnSwipe : true,
			pauseOnDotsClick : true,
			pauseText : '정지',
			playText : '재생',
			current : $Row2.find('.view')
        });
		$('.apt_story_box .apt_story_btnbox .story_controlbox .story_control_btn.next').on('click', function(){
			var $slides = $AptStoryList.find('.apt_story_item'),
				$currentslide = $AptStoryList.find('.apt_story_item.slick-current'),
				$nextslide = $currentslide.next('.apt_story_item');
				$currentslide.addClass('fadeOut');
				$nextslide.addClass('fadeReady');
				$nextslide.addClass('fadeIn');
				$AptStoryList.slick('slickNext');
		});
		/*
		$AptStoryList.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var $currentslide = $(slick.$slides[currentSlide]),
				$nextslide = $(slick.$slides[nextSlide]);
			$currentslide.addClass('fadeOut');
			$nextslide.addClass('fadeReady');
			$nextslide.addClass('fadeIn');
		});*/
		$AptStoryList.on('afterChange', function(event, slick, currentSlide, nextSlide){
			var $currentslide = $(slick.$slides[currentSlide]);
			$(slick.$slides).removeClass('fadeActive fadeOut');
			$currentslide.removeClass('fadeIn').addClass('fadeActive');
		});

		$('.apt_story_box .apt_story_btnbox .story_controlbox .story_control_btn.prev').on('click', function(){
			var $slides = $AptStoryList.find('.apt_story_item'),
				$currentslide = $AptStoryList.find('.apt_story_item.slick-current'),
				$nextslide = $currentslide.prev('.apt_story_item');
				$currentslide.addClass('fadeOut');
				$nextslide.addClass('fadeReady');
				$nextslide.addClass('fadeIn');
				$AptStoryList.slick('slickNext');
		});
	});
})(window.jQuery);