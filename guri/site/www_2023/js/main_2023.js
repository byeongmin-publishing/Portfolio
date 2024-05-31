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
				// 1. 띠 배너 슬라이드
				var $LineSlideBox = $('.line_slide_box'),
					$LineSlideList = $LineSlideBox.find('.line_slide_list');
                
                $LineSlideList.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    prevArrow: $LineSlideBox.find('.slick-arrow.prev'),
                    nextArrow: $LineSlideBox.find('.slick-arrow.next'),
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                });


				// 2. 자주 찾는 메뉴
				var $QuickMenuBox = $('.quick_menu_box.type1'),
					$QuickMenuList = $QuickMenuBox.find('.quick_menu_list');
                
                $QuickMenuList.slick({
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    autoplay : true,
                    dots: false,
                    arrows: true,
                    infinite: false,
					variableWidth: false,
                    prevArrow: $QuickMenuBox.find('.slick-arrow.prev'),
                    nextArrow: $QuickMenuBox.find('.slick-arrow.next'),
					autoArrow : $QuickMenuBox.find('.slick-arrow.auto'),
                    pauseText : '정지',
                    playText : '재생',
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                            breakpoint: 1401,
                            settings: {
                                slidesToShow : 5,
                                slidesToScroll: 5,
                            }
                        },
                        {
                            breakpoint: 1001,
                            settings: {
                              slidesToShow : 6,
                              slidesToScroll: 6,
                            }
                        },
                        {
                            breakpoint: 801,
                            settings: {
                              slidesToShow : 4,
                              slidesToScroll: 4,
                            }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                              slidesToShow : 4,
                              slidesToScroll: 4,
                              rows:2,
                            }
                        }
                    ]
                });
                

                //구리시 소식모아 - 탭/공지
                var $NoticeTabBox = $('.notice_tab_box'),
                    $NoticeTabList = $NoticeTabBox.find('.notice_tab_list'),
                    $NoticeTabBtn = $NoticeTabBox.find('.notice_tab_btn'),
                    $NoticeBox = $('.notice_box');

                $NoticeTabList.slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    variableWidth: true,
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow : 4,
                                slidesToScroll: 1,
                                
                            }
                        },
                    ]
                });

                $NoticeTabBtn.on('click', function(){
                    var $this = $(this),
                        $NoticeTabItem = $this.parent(),
                        $NoticeTabSlide = $this.parents('.slick-slide'),
                        $OtherTabItem = $NoticeTabSlide.siblings().find('.notice_tab_item'),
                        $OtherTabBtn = $OtherTabItem.find('.notice_tab_btn'),
                        $thisIndex = $NoticeTabSlide.index();

                    if(!$NoticeTabItem.is('.active')){
                        $NoticeTabItem.addClass('active');
                        $this.attr('title', '선택됨');
                        $OtherTabItem.removeClass('active');
                        $OtherTabBtn.removeAttr('title');
                        $NoticeBox.eq($thisIndex).addClass('active').siblings().removeClass('active');
                    }
                });


                //구리시 소식모아 - 팝업
                var $PopupWrap = $('.popup_wrap'),
                    $PopupSlideBox = $PopupWrap.find('.popup_slide_box');
                
                $PopupSlideBox.each(function(){
                    var $this = $(this),
                        $PopupSlideList = $this.find('.popup_slide_list');

                    $PopupSlideList.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay : false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        variableWidth: false,
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
                    }).on('afterChange', function(event, slick, current){
                        $this.find('.title .month').text((current + 1));
                    });
                })

                var $PopupTabList = $('.popup_tab_list'),
                    $PopupTabBtn = $PopupTabList.find('.popup_tab_btn'),
                    $PopupSlideBox = $('.popup_slide_box');

                $PopupTabBtn.on('click', function(){
                    var $this = $(this),
                        $PopupTabItem = $this.parent(),
                        $OtherTabItem = $PopupTabItem.siblings(),
                        $OtherTabBtn = $OtherTabItem.find('.popup_tab_btn'),
                        $thisIndex = $PopupTabItem.index();

                    if(!$PopupTabItem.is('.active')){
                        $PopupTabItem.addClass('active');
                        $this.attr('title', '선택됨');
                        $OtherTabItem.removeClass('active');
                        $OtherTabBtn.removeAttr('title');
                        $PopupSlideBox.eq(($thisIndex - 1)).addClass('active').siblings().removeClass('active');
                        $PopupSlideBox.eq(($thisIndex - 1)).find('.popup_slide_list').slick('setPosition');
                    }
                    if($thisIndex == 1){
                        $PopupTabList.removeClass('select2').addClass('select1');
                    }
                    if($thisIndex == 2){
                        $PopupTabList.removeClass('select1').addClass('select2');
                    }
                });
                

                // 5. SNS 이야기
				var $SnsVideoList = $('.sns_video_list');
                
                $SnsVideoList.slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    variableWidth: true,
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                            breakpoint: 1001,
                            settings: {
                                slidesToShow : 5,
                            }
                        },
                        {
                            breakpoint: 801,
                            settings: {
                                slidesToShow : 4,
                            }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow : 3,
                            }
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow : 2,
                            }
                        }
                    ]
                });
                
                

                // 6. 구리시 문화관광
                $('.culture_box').each(function(){
                    var $thisCulturebox = $(this),
                        $thisCultureList = $thisCulturebox.find('.culture_list');

                    $thisCultureList.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay : false,
                        dots: true,
                        customPaging: function (slider, i) {
                            if(i < 9){
                                return '<button><svg class="bu_deco" width="49" height="49" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000"><path d="M163 84C163 127.63 127.63 163 84 163C40.3695 163 5 127.63 5 84C5 40.3695 40.3695 5 84 5C127.63 5 163 40.3695 163 84Z" stroke="#60ac7c" stroke-width="4"/></svg>' +
                                '<span class="text">'+ 0 +(i + 1)+'</span>' +
                                '<span class="text type2">'+$thisCultureList.find('.slick-slide[data-slick-index="'+i+'"]').find('.title').text()+'</span>' +
                                '</button>';
                            }
                            if(i >= 9){
                                return '<button><svg class="bu_deco" width="49" height="49" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000"><path d="M163 84C163 127.63 127.63 163 84 163C40.3695 163 5 127.63 5 84C5 40.3695 40.3695 5 84 5C127.63 5 163 40.3695 163 84Z" stroke="#60ac7c" stroke-width="4"/></svg>' +
                                '<span class="text">'+(i + 1)+'</span>' +
                                '<span class="text type2">'+$thisCultureList.find('.slick-slide[data-slick-index="'+i+'"]').find('.title').text()+'</span>' +
                                '</button>';
                            }
                        },
                        arrows: false,
                        infinite: true,
                        centerMode: true,
                        centerPadding: 0,
                        variableWidth: true,
                        isRunOnLowIE : false,
                        pauseOnFocus: true,
                        pauseOnArrowClick : true,
                        pauseOnDirectionKeyPush : true,
                        pauseOnSwipe : false,
                        pauseOnDotsClick : true,
                        responsive: [
                            {
                                breakpoint: 1001,
                                settings: {
                                    dots: false,
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 801,
                                settings: {
                                    dots: false,
                                    slidesToShow: 1,
                                }
                            },
                            {
                                breakpoint: 641,
                                settings: {
                                    dots: false,
                                    slidesToShow: 1,
                                }
                            },
                            {
                                breakpoint: 481,
                                settings: {
                                    dots: false,
                                    slidesToShow: 1,
                                    variableWidth: false,
                                }
                            }
                        ]
                    });
                    $thisCultureList.on("beforeChange",function(event, slick, currentSlide, nextSlide) {
                        $('.culture_item').removeClass('on');
                        $('.slick-slide').removeClass('padding1 padding2 padding3 padding4');
                        
                    });
                    $thisCultureList.on('afterChange', function(event, slick, current){
                        setTimeout(function(){
                            $('.slick-center').find('.culture_item').addClass('on');
                        }, 1);
                        $('.slick-center').next().addClass('padding1');
                        $('.slick-center').next().next().addClass('padding2');
                        $('.slick-center').next().next().attr('tabindex', '-1');
                        $('.slick-center').prev().addClass('padding3');
                        $('.slick-center').prev().prev().addClass('padding4');
                    });

                    if($thisCulturebox.find('.slick-dots').find('li').length == 1){
                        $thisCulturebox.addClass('item1');
                    }
                });
                $('.slick-center').find('.culture_item').addClass('on');
                $('.slick-center').next().addClass('padding1');
                $('.slick-center').next().next().addClass('padding2');
                $('.slick-center').next().next().attr('tabindex', '-1');
                $('.slick-center').prev().addClass('padding3');
                $('.slick-center').prev().prev().addClass('padding4');

                var $CultureTabBox = $('.culture_tab_box'),
                    $CultureTabBtn = $CultureTabBox.find('.culture_tab_btn');

                $CultureTabBtn.on('click', function(){
                    var $this = $(this),
                        $CultureTabItem = $this.parent(),
                        $OtherTabItem = $CultureTabItem.siblings(),
                        $OtherTabBtn = $OtherTabItem.find('.culture_tab_btn'),
                        $thisIndex = $CultureTabItem.index();

                    if(!$CultureTabItem.is('.active')){
                        $CultureTabItem.addClass('active');
                        $this.attr('title', '선택됨');
                        $OtherTabItem.removeClass('active');
                        $OtherTabBtn.removeAttr('title');
                        $('.culture_box').eq($thisIndex).addClass('active').siblings().removeClass('active');
                        $('.culture_box').eq($thisIndex).find('.culture_list').slick('setPosition');
                    }
                })


                ///*8. 유관기관소식*/
                var $NewsbannerBox = $('.newsbanner_box'),
                    $NewsbannerList = $NewsbannerBox.find('.newsbanner_list');

                $NewsbannerList.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay : true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    variableWidth: true,
                    prevArrow: $NewsbannerBox.find('.slick-arrow.prev'),
                    nextArrow: $NewsbannerBox.find('.slick-arrow.next'),
                    autoArrow: $NewsbannerBox.find('.slick-arrow.auto'),
                    pauseText : '정지',
                    playText : '재생',
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow: 1,
                                rows: 3,
                                variableWidth: false,
                            }
                        },
                    ]
                })



                //스크롤 애니메이션
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
                    if(!$('.rowgroup2').is('.active')){
                        $('.time_ani').removeClass('delay0');
                    }
                });


                //푸터 상단 바로가기 시작
                $('.footer_top_box .footer_top').on('click', function() {
                    $('html, body').animate({
                        scrollTop: $('body').offset().top
                    }, 500);
                });


                //푸터배너
				var $banner = $('.footer_banner .banner .banner_list');
				$banner.slick({
					//기본
					autoplay : true,
					dots : false,
					swipe : false,
					draggable : false,
					slidesToShow : 5,
					slidesToScroll: 1,
					variableWidth: true,
					infinite: true,
					prevArrow : $('.footer_banner .banner .banner_control .prev'),
					nextArrow : $('.footer_banner .banner .banner_control .next'),

					//추가 기능
					autoArrow : $('.footer_banner .banner .banner_control .auto'),
					isRunOnLowIE : false,
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					pauseOnDotsClick : true,
					pauseText : '정지',
					playText : '재생',
					responsive: [
					{
					  breakpoint: 1401,
					  settings: {
						slidesToShow : 3
					  }
					},
					{
					  breakpoint: 921,
					  settings: {
						slidesToShow : 3
					  }
					},
					{
					  breakpoint: 851,
					  settings: {
						slidesToShow : 2
					  }
					},
					{
					  breakpoint: 731,
					  settings: {
						slidesToShow : 1
					  }
					},
                    {
                        breakpoint: 641,
                        settings: {
                          slidesToShow : 3
                        }
                    },
                    {
                        breakpoint: 401,
                        settings: {
                          slidesToShow : 2
                        }
                      }
                    ]
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