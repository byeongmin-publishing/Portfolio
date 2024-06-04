(function($) {
	'use strict';

	var $window = $(window),
		$html = $('html');
	var fullPageCreated = false;
	$html.attr('data-fpenabled', false);

	function createFullpage() {
		if (fullPageCreated === false) {
			fullPageCreated = true;
			$('#container').fullpage({
				autoScrolling:true,
				scrollHorizontally: true,
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,
				lazyLoading : true,
				anchors : ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
				verticalCentered : false,
				scrollOverflow : false,
				scrollingSpeed : 500,
				css3 : false,
				responsiveWidth : 1001,
				bigSectionsDestination: top,
				normalScrollElements:'.slide_popup_list, .load_box',
				afterResponsive: function(isResponsive){
				
				},
				//easing : 'easeInOutExpo',
				//loopHorizontal : true,
				dragAndMove : true,
				sectionSelector: $('#container').children('.rowgroup')
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


		//본문 바로가기
		$('.accessibility a').on("keydown", function(e) {
			if (e.keyCode == 13) { // enter key
				$('.rowgroup1 .slide_menu_box .slide_menu_item:eq(0) .item_area').focus();
				e.preventDefault();
			}
		});


		//메인슬라이드 팝업
		var $SlidePopupBox = $('.slide_popup_box'),
			$SlidePopupList = $SlidePopupBox.find('.slide_popup_list');

		$SlidePopupList.slick({
			swipe : true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 1,
			autoplay : false,
			dots: false,
			arrows: true,
			prevArrow: $SlidePopupBox.find('.slick-arrow.prev'),
			nextArrow: $SlidePopupBox.find('.slick-arrow.next'),
			infinite: false,
			vertical: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						swipe : true,
						draggable: true,
						verticalSwiping: true
					}
				},
				{
				  breakpoint: 641,
				  settings: {
					  vertical: false,
				  }
				}
			]
		});
		$SlidePopupList.on('wheel', (function(e) {
			e.preventDefault();
		  
			if($(window).width() > 640){
				if (e.originalEvent.deltaY < 0) {
				  $(this).slick('slickPrev');
				} else {
				  $(this).slick('slickNext');
				}
			}
		}));


		//진행중 이벤트 - 슬라이드
		var $EventSlideInner = $('.event_slide_inner');

		$EventSlideInner.each(function(){
			var $this = $(this),
				$EventSlideList = $this.find('.event_slide_list');

			$EventSlideList.slick({
				swipe : true,
				swipeToSlide : true,
				draggable : true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : false,
				dots: false,
				arrows: true,
				infinite: true,
				//추가 기능
				prevArrow: $this.find('.slick-arrow.prev'),
				nextArrow: $this.find('.slick-arrow.next'),
				current : $this.find('.slick-text.current'),
				total : $this.find('.slick-text.total'),
				isRunOnLowIE : false,
				pauseOnFocus: true,
				pauseOnArrowClick : true,
				pauseOnDirectionKeyPush : true,
				pauseOnSwipe : false,
				pauseOnDotsClick : true,
			});

			if($EventSlideList.find('.event_slide_item').length < 2){
				$this.addClass('no_control');
			}
		});


		//진행중 이벤트 - 리스트
		$('.rowgroup2 .event_box .event_item').first().addClass('active');
		$('.rowgroup2 .event_box .event_item').first().find('.item_area').slideDown(500);
		$('.rowgroup2 .event_box .item_btn').on('click', function(){
			var $thisBtn = $(this),
				$MyParent = $thisBtn.parent('.event_item'),
				IsActive = $MyParent.is('.active'),
				$OtherParents = $MyParent.siblings('.event_item'),
				$OtherBtns = $OtherParents.find('.item_btn'),
				$thisText = $MyParent.find('.item_area'),
				$OtherText = $OtherParents.find('.item_area'),
				MyParentIndex = $MyParent.index();
			if(!IsActive){
				$OtherParents.removeClass('active');
				$OtherBtns.removeAttr('title');
				$thisBtn.attr('title', '선택됨');
				$thisText.slideDown(500);
				$OtherText.slideUp(500);
				setTimeout(function(){
					$MyParent.addClass('active');
				},1);
				$EventSlideInner.eq(MyParentIndex).addClass('active').siblings().removeClass('active');
				$EventSlideInner.eq(MyParentIndex).find('.event_slide_list').slick('setPosition');
			}else{
				$MyParent.removeClass('active');
				$thisBtn.removeAttr('title');
				$thisText.slideUp(500);
			}
		});


		//축제행사 소식 - 슬라이드
		var $FestivalSlideBox = $('.festival_slide_box');

		$FestivalSlideBox.each(function(){
			var $thisBox = $(this),
			$FestivalSlideList = $thisBox.find('.festival_slide_list');

			$FestivalSlideList.slick({
				swipe : false,
				draggable : false,
				swipeToSlide : false,
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 2,
				autoplay: false,
				prevArrow: $thisBox.find('.slick-arrow.prev'),
				nextArrow: $thisBox.find('.slick-arrow.next'),
				dots: false,
				vertical: true,
				responsive: [
					{
					  breakpoint: 1001,
					  settings: {
							swipe : true,
							verticalSwiping: true,
							slidesToShow : 2,
							slidesToScroll: 2,
					  }
					},
					{
						breakpoint: 801,
						settings: {
							swipe : true,
							verticalSwiping: true,
							slidesToShow : 1,
							slidesToScroll: 1,
							vertical: false,
							draggable : true,
						}
					  }
				]
			});
		});


		//축제행사 소식 - 탭
		$('.rowgroup3 .festival_box .item_btn').on('click', function(){
			var $thisBtn = $(this),
				$MyParent = $thisBtn.parent('.festival_item'),
				IsActive = $MyParent.is('.active'),
				$OtherParents = $MyParent.siblings('.festival_item'),
				$OtherBtns = $OtherParents.find('.item_btn'),
				ParentsIndex = $MyParent.index();

			if(!IsActive){
				$MyParent.addClass('active');
				$OtherParents.removeClass('active');
				$thisBtn.attr('title', '선택됨');
				$OtherBtns.removeAttr('title');
				$FestivalSlideBox.eq(ParentsIndex).addClass('on').siblings().removeClass('on');
				$FestivalSlideBox.eq(ParentsIndex).find('.festival_slide_list').slick('setPosition');
			}
		});


		//공지사항 - 탭
		$('.rowgroup4 .notice_tab_list .item_btn').on('click', function(){
			var $thisBtn = $(this),
				$MyParent = $thisBtn.parent('.notice_tab_item'),
				IsActive = $MyParent.is('.active'),
				$OtherParents = $MyParent.siblings('.notice_tab_item'),
				$OtherBtns = $OtherParents.find('.item_btn'),
				ParentsIndex = $MyParent.index(),
				$NoticeList = $('.notice_list');

			if(!IsActive){
				$MyParent.addClass('active');
				$OtherParents.removeClass('active');
				$thisBtn.attr('title', '선택됨');
				$OtherBtns.removeAttr('title');
				$NoticeList.eq(ParentsIndex).addClass('active').siblings('.notice_list').removeClass('active');
			}
		});
		$('.rowgroup4 .notice_tab_list .item_btn').on('mouseover', function(){
			var $thisBtn = $(this),
				$MyParent = $thisBtn.parent('.notice_tab_item'),
				IsActive = $MyParent.is('.active'),
				$OtherParents = $MyParent.siblings('.notice_tab_item'),
				$OtherBtns = $OtherParents.find('.item_btn'),
				ParentsIndex = $MyParent.index(),
				$NoticeList = $('.notice_list');

				if(!IsActive){
					$MyParent.addClass('over');
					$OtherParents.addClass('noneover');
				}
		});
		$('.rowgroup4 .notice_tab_list .item_btn').on('mouseleave', function(){
				$('.notice_tab_item').removeClass('over noneover');
		});


		//스크롤 컨텐츠
		var $scrollcontent = $('.scroll_content');

		$scrollcontent.each(function(){
			var $this = $(this),
				scrollTop = $window.scrollTop(),
				scrollBottom = scrollTop + $window.height(),
				contentOffset = $this.offset();
			if(scrollBottom > contentOffset.top) {
				$this.addClass('active');
			};
		});

		$window.on('scroll', function(event) {
			
			$scrollcontent.each(function(){
				var $this = $(this),
					scrollTop = $window.scrollTop(),
					scrollBottom = scrollTop + $window.height(),
					contentOffset = $this.offset();
				if(scrollBottom > contentOffset.top) {
					$this.addClass('active');
				}else{
					$this.removeClass('active');
				};
			});
		});
	});
})(window.jQuery);