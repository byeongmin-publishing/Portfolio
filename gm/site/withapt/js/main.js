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
				bigSectionsDestination: top,
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

		
		// TOP버튼
		$('.top_btn_box .top_btn').on('click', function(){
			if(Hmode === 'MinHeight') {
				$('html, body').animate({
					scrollTop : 0
				}, 500);
			};
		})


		// 공지사항
        var $Row1 = $('.rowgroup1'),
		$AptNoticeList = $('.rowgroup1 .apt_notice_box .apt_notice_list');
        $AptNoticeList.slick({
            
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay : false,
            dots:true,
            arrows: true,
            prevArrow: $Row1.find('.prev'),
		    nextArrow: $Row1.find('.next'),
            variableWidth: true,
            infinite: false,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
        });
		$window.on('load',function(){
			$('.apt_notice_list.page_on').removeClass('page_on');
		})


		// 우리동네 업그레이드 공동체소식
        var $Row2 = $('.rowgroup2'),
		$AptStoryList = $('.rowgroup2 .apt_story_list');
        $AptStoryList.slick({            
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots:false,
            arrows: true,
            variableWidth: true,
            prevArrow: $Row2.find('.prev'),
		    nextArrow: $Row2.find('.next'),
			speed: 1000,
            infinite: false,
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
			current : $Row2.find('.view'),
			total : $Row2.find('.total_count')
        });

		// 사업신청
		var $AptScheduletabItem = $('.rowgroup3 .section .apt_schedule_box .apt_scheduletab_box .apt_scheduletab_list .apt_scheduletab_item'),
			$AptSchedulelistBox = $('.rowgroup3 .section .apt_schedule_box .apt_schedulelist_box');
		$AptScheduletabItem.on('click', function(){
			var $this = $(this),
				AptScheduletabActive = $this.is('.active'),
				ScheduletabItemIndex = $this.index(),
				$AptScheduletabBtn =  $this.find('.apt_scheduletab_btn');

			if(!AptScheduletabActive){
				$this.addClass('active');
				$AptScheduletabBtn.attr('title', '선택됨');
				$this.siblings().removeClass('active');
				$this.siblings().find('.apt_scheduletab_btn').removeAttr('title');
				$AptSchedulelistBox.eq(ScheduletabItemIndex).addClass('active').siblings().removeClass('active').removeClass('time_ani');
				setTimeout(function(){
					$AptSchedulelistBox.eq(ScheduletabItemIndex).addClass('time_ani');
				}, 1)

			}
		})

		// footer_popup
		var $slide = $('.footer_slidebox .slide_list');
		$slide.slick({
			autoplay : true,
			autoplaySpeed : 3000,
			dots: true,
			appendDots : $('.footer_slidebox .slide_control .dotbox'),
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			prevArrow : $('.footer_slidebox .slide_control .prev'),
			nextArrow : $('.footer_slidebox .slide_control .next'),
			pauseOnDotsHover : true,
			swipe: true,
			draggable: true,
			//추가 기능
			autoArrow : $('.footer_slidebox .slide_control .auto'),
			isRunOnLowIE : false,
			pauseOnArrowClick : true,
			pauseOnDirectionKeyPush : true,
			pauseOnSwipe : true,
			pauseOnDotsClick : true,
			pauseText : '정지',
			playText : '재생',
			// total : $('.footer_slidebox .countbox .total'),
			// current : $('.footer_slidebox .countbox .current'),
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						swipe:true,
						draggable:true
					}
				}]
		});

		$('.accessibility a').on("keydown", function(e) {
			if (e.keyCode == 13) { // enter key
				$('.rowgroup1 .more_view').focus();
				e.preventDefault();
			}
		});
	});
})(window.jQuery);