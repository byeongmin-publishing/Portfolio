'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	if(jQuery) {
		//$ 중복방지
		(function($) {
			//태그객체
			var $window = $(window);
			$(function() {
				//1.메인슬라이드
				var $MainSlideBox = $('.main_slide_box'),
					$MainSlideList = $MainSlideBox.find('.main_slide_list');

				$MainSlideList.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay : true,
					autoplaySpeed: 4000,
					dots: false,
					arrows: true,
					infinite: true,
					prevArrow: $MainSlideBox.find('.slick-arrow.prev'),
					nextArrow: $MainSlideBox.find('.slick-arrow.next'),
					autoArrow : $MainSlideBox.find('.slick-arrow.auto'),
                    pauseText : '정지',
                    playText : '재생',
					current : $MainSlideBox.find('.slick-text.current'),
					total : $MainSlideBox.find('.slick-text.total'),
					isRunOnLowIE : false,
					pauseOnFocus: true,
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
				}).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
					$('.main_slide_control .auto_box').removeClass('on');
					$('.main_slide_box .title_box').removeClass('on');
				}).on('afterChange', function(event, slick, current){
					$('.main_slide_control .auto_box').addClass('on');
					$('.main_slide_box .title_box').addClass('on');
				});

				//메인슬라이드 텍스트
                var $MainSlideItem = $MainSlideList.find('.main_slide_item');

                $MainSlideItem.each(function(){
                    var $this = $(this),
                        $ItemTopText = $this.find('.title.top').text(),
                        $ItemTopTyping = $this.find('.typing.top'),
                        $TextTopSlice = $ItemTopText.split(""),
                        $ItemBotText = $this.find('.title.bot').text(),
                        $ItemBotTyping = $this.find('.typing.bot'),
                        $TextBotSlice = $ItemBotText.split("");

					for(var i = 0; i < $TextTopSlice.length; i++){
						$ItemTopTyping.append("<em>"+$TextTopSlice[i]+"</em>");
						$ItemTopTyping.find("em").eq(i).addClass("time_ani"+i+"");
					}
					for(var i = 0; i < $TextBotSlice.length; i++){
						$ItemBotTyping.append("<em>"+$TextBotSlice[i]+"</em>");
						$ItemBotTyping.find("em").eq(i).addClass("time_ani"+($TextTopSlice.length + i)+"");
					}
					$this.find('.title_box .text').addClass("time_ani"+($TextTopSlice.length + $TextBotSlice.length)+"");
                });

				setTimeout(function(){
					$('.main_slide_control .auto_box').addClass('on');
					$('.main_slide_box .title_box').addClass('on');
				},1)


				/*3.생생현장*/

				var swiper = new Swiper('.gallery_box', {
                    slidesPerView: 3,
					spaceBetween: 40,
                    loop: true,
                    loopAdditionalSlides : 8,
					watchSlidesVisibility: true,
					speed: 750,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: true,
                    },
                    navigation: {
                        prevEl: '.swiper-button.prev',
                        nextEl: '.swiper-button.next',
					},
					breakpoints: {
                        1400: {
							slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        800: {
                            slidesPerView: 1,
							spaceBetween: '3%',
                        }
                    }
                });

				$('.swiper-button').on('click', function(){
					swiper.autoplay.stop();
					$('.swiper-button.play').css('display', 'inline-block');
					$('.swiper-button.pause').css('display', 'none');
				});
	
				$('.swiper-button.play').on('click', function(){
					swiper.autoplay.start();
					$('.swiper-button.pause').css('display', 'inline-block');
					$('.swiper-button.play').css('display', 'none');
				});


				//스크롤 컨텐츠
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


				$window.on('screen:wide screen:web', function(event) {

				});

				$window.on('screen:tablet screen:phone', function(event) {

				});

			});
		})(jQuery);
	}
}catch(e) {
	console.error(e);
}