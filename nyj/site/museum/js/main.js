//프로모션 유튜브
function onPlayerReady(event) {
	//event.target.playVideo();//자동재생
	//로딩할때 실행될 동작을 작성한다.
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
		//플레이어가 재생중일때 작성한 동작이 실행된다.
	}
}

function YoutubePlay(YoutubeID) {
	YoutubeID.playVideo();
}

function YoutubePause(YoutubeID) {
	YoutubeID.pauseVideo();
}

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
				
				//여기서부터 코드 작성해주세요

                // 메인 비주얼 슬라이드
                var $MuseumSlideBox = $('.museum_slide_box'),
                    $MuseumSlideList = $MuseumSlideBox.find('.museum_slide_list');
                $MuseumSlideList.slick({

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    prevArrow: $MuseumSlideBox.find('.slide_btn.prev'),
                    nextArrow: $MuseumSlideBox.find('.slide_btn.next'),
                    infinite: true,
                    //추가 기능
                    isRunOnLowIE : false,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : true,
                    pauseOnDotsClick : true,
                    current : $MuseumSlideBox.find('.current_number'),
                    total : $MuseumSlideBox.find('.total_number')
                });

                // 메인 비주얼 하단 메뉴 슬라이드
                var $ServiceMenuBox = $('.service_menu_box'),
                    $ServiceMenuList = $ServiceMenuBox.find('.service_menu_list');
                $ServiceMenuList.slick({

                    autoplay : false,
                    dots : false,
                    arrows: false,
                    slidesToShow : 6,
                    slidesToScroll : 2,
                    infinite : false,
                    swipe : false,
                    swipeToSlide : false,
                    draggable : false,
                    variableWidth: true,
                    centerMode: false,
                    responsive: [
                        {
                          breakpoint: 1000,
                          settings: {
                            slidesToShow : 4,
                            swipe : true,
                            swipeToSlide : true,
                            draggable: true
                          }
                        },
                    ]
                });

                // 현재전시 슬라이드
                var $ShowSlideBox = $('.show_slide_box'),
                    $ShowSlideList = $ShowSlideBox.find('.show_slide_list');
                    
                $ShowSlideList.each(function(){
                    var $this = $(this),
                        $ShowSlideWrap = $this.parent('.show_slide_wrap');

                    $this.slick({
                        
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay : false,
                        dots: false,
                        arrows: true,
                        prevArrow: $ShowSlideWrap.find('.slide_btn.prev'),
                        nextArrow: $ShowSlideWrap.find('.slide_btn.next'),
                        infinite: false,
                        fade: true,
                        //추가 기능
                        isRunOnLowIE : false,
                        pauseOnArrowClick : true,
                        pauseOnDirectionKeyPush : true,
                        pauseOnSwipe : true,
                        pauseOnDotsClick : true
                    });
                });

                // 현재전시 탭
                var $MuseumSlideBtn = $('.showtab_btn_wrap .show_tab_btn'),
                    $ShowSlideWrap = $('.show_slide_box .show_slide_wrap'),
                    $MoreViewItem = $('.more_view_box .more_view_list .more_view_item'),
                    $SlideTextItem = $('.slide_text_box .slide_text_list .slide_text_item');

                $MuseumSlideBtn.on('click', function(){
                    var $this = $(this),
                        $OtherBtn = $this.parent().siblings().find('.show_tab_btn'),
                        thisIndex = $this.parent().index(),
                        thisActive = $this.is('.active');

                    if(!thisActive){
                        $this.addClass('active');
                        $this.attr('title', '선택됨');
                        $OtherBtn.removeClass('active');
                        $OtherBtn.removeAttr('title', '선택됨');
                        $MoreViewItem.eq(thisIndex).addClass('active').siblings().removeClass('active');
                        $ShowSlideWrap.eq(thisIndex).addClass('active').siblings().removeClass('active');
                        $ShowSlideWrap.eq(thisIndex).find('.show_slide_list').slick('setPosition');
                        $SlideTextItem.css('marginTop', '-26' * thisIndex + 'px');
                    }
                });

                //프로모션 유튜브
                $('.info_wrap .promotion_box .video_box .playbtn').on('click', function(){
                    var $this = $(this);
                    YoutubePlay(youTubePlayer1);
                    $this.fadeOut();
                });

                // 소식 탭
                var $MuseumNoticeBtn = $('.notice_tab_list .notice_btn'),
                    $NoticeContentsBox = $('.notice_box .notice_contents_box');

                $MuseumNoticeBtn.on('click', function(){
                    var $this = $(this),
                        $OtherBtn = $this.parent().siblings().find('.notice_btn'),
                        thisIndex = $this.parent().index(),
                        thisActive = $this.is('.active');

                    if(!thisActive){
                        $this.addClass('active');
                        $this.attr('title', '선택됨');
                        $OtherBtn.removeClass('active');
                        $OtherBtn.removeAttr('title', '선택됨');
                        $NoticeContentsBox.eq(thisIndex).addClass('active').siblings().removeClass('active');
                    }
                });

                //교육 슬라이드
                var $EduSlideBox = $('.edu_slide_box'),
                $EduSlideList = $EduSlideBox.find('.edu_slide_list');
            
                $EduSlideList.slick({
                    
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay : true,
                    centerMode: true,
                    centerPadding: '0px',
                    variableWidth: true,
                    dots: false,
                    arrows: true,
                    prevArrow: $EduSlideBox.find('.slide_btn.prev'),
                    nextArrow: $EduSlideBox.find('.slide_btn.next'),
                    infinite: true,
                    cssEase: 'cubic-bezier(0.4, 0.2, 0.25, 1)',
                    //추가 기능
                    isRunOnLowIE : false,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : true,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                          breakpoint: 1001,
                          settings: {
                            slidesToShow : 2,
                            centerMode: false,
                            swipe : true,
                            swipeToSlide : true,
                            draggable: true
                          }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow : 1,
                                centerMode: true,
                                swipe : true,
                                swipeToSlide : true,
                                draggable: true
                            }
                        }
                    ]
                });


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


                // 현재전시 슬라이드
                var $EventBox = $('.event'),
                    $EventList = $EventBox.find('.event_list');

                    $EventList.slick({
                    });