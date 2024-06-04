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
				//menu: '.navbox',
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


		//메인슬라이드
		var $MainSlideBox = $('.main_slide_box'),
			$MainSlideList = $MainSlideBox.find('.main_slide_list'),
			$MainSlideProgress = $MainSlideBox.find('.main_slide_progress'),
			$MainSlideText = $MainSlideBox.find('.main_slide_item .text_box');

			$MainSlideList.slick({
				swipe : true,
				swipeToSlide : true,
				draggable : true,
				variableWidth: false,
				centerMode: true,
				centerPadding: 0,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 3000,
				dots: false,
				arrows: false,
				infinite: true,
				//추가 기능
				current : $MainSlideBox.find('.current em'),
				total : $MainSlideBox.find('.total em'),
				autoArrow : $MainSlideBox.find('.slide_control_btn'),
				isRunOnLowIE : false,
				pauseOnFocus: true,
				pauseOnArrowClick : true,
				pauseOnDirectionKeyPush : true,
				pauseOnSwipe : false,
				pauseOnDotsClick : true,
				pauseText : 'Pause',
				playText : 'Play',
				

				//프로그래스바
				customState : function(state) {
				var slidesToShow = $MainSlideList.slick('getSlick').options.slidesToShow,
						current = Math.ceil(state.current / slidesToShow),
						total = Math.ceil(state.total / slidesToShow);
				if (current < 10) {
					state.current = current;
				}
				if (total < 10) {
					state.total = total;
				}
				return state;
			}
		}).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
			$MainSlideProgress.removeClass('on');
			$MainSlideText.removeClass('on');
			$('.main_slide_progress').slick('resize');
		}).on('afterChange', function(event, slick, current){
			$MainSlideProgress.addClass('on');
			$MainSlideText.addClass('on');
			$('.main_slide_progress').slick('resize');
		});
		$MainSlideText.addClass('on');
		$MainSlideProgress.addClass('on');


		//뉴스레터 - 슬라이드
		var $NewsletterList = $('.newsletter_list');

		$NewsletterList.each(function(){
			var $this = $(this),
				$NewsletterBox = $this.parent();

			$this.slick({
				swipe : true,
				variableWidth: true,
				centerMode: false,
				centerPadding: 0,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: $NewsletterBox.find('.slide_arrow.prev'),
				nextArrow: $NewsletterBox.find('.slide_arrow.next'),
				appendDots : $NewsletterBox.find('.slide_control_box'),
				rows: 1,
				autoplay : false,
				dots: true,
				arrows: true,
				infinite: false,
				responsive: [
					{
					  breakpoint: 641,
					  settings: {
						swipe : false,
						slidesToShow : 2,
						slidesToScroll: 2,
					  }
					},
				]
			}).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
				$NewsletterList.removeClass('on');
			}).on('afterChange', function(event, slick, current){
				$NewsletterList.addClass('on');
			});
			$NewsletterList.addClass('on');
		});


		//뉴스레터 - 탭
		var $NewsletterTabBox = $('.newsletter_tab_box'),
			$NewsletterTabBtn = $NewsletterTabBox.find('.newsletter_tab_btn'),
			$NewsBox = $('.newsletter_box'),
			$NewsBoxDots = $NewsBox.find('.slick-dots');

		$NewsletterTabBtn.on('click', function(){
			var $this = $(this),
				$NewsletterTabItem = $this.parent(),
				$OtherTabItem = $NewsletterTabItem.siblings(),
				$OtherTabBtn = $OtherTabItem.find('.newsletter_tab_btn'),
				$thisIndex = $NewsletterTabItem.index();

			if(!$NewsletterTabItem.is('.active')){
				$NewsletterTabItem.addClass('active');
				$this.attr('title', 'Select');
				$OtherTabItem.removeClass('active');
				$OtherTabBtn.removeAttr('title');
				$NewsBox.eq($thisIndex).addClass('active').siblings().removeClass('active');
				$NewsBox.eq($thisIndex).find('.newsletter_list').slick('setPosition');
				$NewsletterList.removeClass('on');
				setTimeout(function(){
					$NewsletterList.addClass('on');
				}, 1)
			}
		});


		//뉴스레터 dots 텍스트
		$NewsBoxDots.find('li').each(function(){
			var $this = $(this),
				$thisIndex = $this.index();

				$this.find('button').text('0' + ($thisIndex+1));
		});


		//컨설팅 어두운 배경
		var $ConsultingItem = $('.consulting_list .consulting_item');
		
		$ConsultingItem.each(function(){

			var $this = $(this),
				$thisIndex = $this.index(),
				$thisArea = $this.find('.item_area'),
				$ConsultingHoverBg = $('.consulting_hover_bg');

			var $ConsultingMouseArea = $thisArea.parent().parent();

			$ConsultingMouseArea.on('mouseover', function(){
				$ConsultingHoverBg.addClass('active');
			});
			$ConsultingMouseArea.on('mouseleave', function(){
				$ConsultingHoverBg.removeClass('active');
				$ConsultingItem.removeClass('on');
			});
			
			$thisArea.on('mouseenter', function(){
				var $BgItem = $ConsultingHoverBg.find('.bg_item'),
					$BgItemIndex = $thisArea.parent().index(),
					$BgItemWidth = $BgItem.width(),
					$BgItemWidthLeft = ($BgItemWidth * -4),
					$ConsultingBgLeft = ($BgItemWidthLeft - $thisIndex * $BgItemWidth * -1);

				if(!$ConsultingHoverBg.is('.active')){
					$ConsultingHoverBg.css('left', $ConsultingBgLeft);
				}else{
					$ConsultingHoverBg.stop().animate({'left': $ConsultingBgLeft}, 250, 'swing');
				}
				$ConsultingItem.eq($BgItemIndex).addClass('on').siblings().removeClass('on');
			});
		})


		var $ImgViewBtn = $('.rowgroup4 .img_view_btn'),
			$ImgPopup = $('.rowgroup4 .img_popup'),
			$CloseBtn = $('.rowgroup4 .close_btn');

		$ImgViewBtn.on('click', function(){
			$ImgPopup.addClass('active');
			$CloseBtn.addClass('active');
		});
		$CloseBtn.on('click', function(){
			$ImgPopup.removeClass('active');
			$CloseBtn.removeClass('active');
		});



		$(function() {
			var $window = $(window),
			$scrollcontent = $('.scroll_content');
		
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

	});
})(window.jQuery);