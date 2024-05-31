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
				
                //메인비주얼
                var $VisualTitleList = $('.rowgroup1 .visual_title_list');
    
                $VisualTitleList.addClass('time_ani');


                //소개 - 팝업
                var $IntroPopupBox = $('.rowgroup2 .intro_popup_box');

                $IntroPopupBox.each(function(){
                    var $this = $(this),
                        $IntroPopupList = $this.find('.intro_popup_list');

                    $IntroPopupList.slick({

                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay : true,
                        dots: false,
                        arrows: true,
                        prevArrow: $this.find('.slick-arrow.prev'),
                        nextArrow: $this.find('.slick-arrow.next'),
                        autoArrow : $this.find('.slick-arrow.auto'),
                        pauseText : '정지',
                        playText : '재생',
                        infinite: true,
                        variableWidth: false,
                        //추가 기능
                        isRunOnLowIE : false,
                        pauseOnArrowClick : true,
                        pauseOnDirectionKeyPush : true,
                        pauseOnSwipe : true,
                        pauseOnDotsClick : true,
                        current : $this.find('.current_number'),
                        total : $this.find('.total_number')
                    });
                });


                //포토갤러리
                var $EyhPhotoBox = $('.rowgroup2 .photo_box');

                $EyhPhotoBox.each(function(){
                    var $this = $(this),
                        $EyhPhotoList = $this.find('.photo_list');

                    $EyhPhotoList.slick({

                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay : false,
                        dots: false,
                        arrows: true,
                        prevArrow: $this.find('.slick-arrow.prev'),
                        nextArrow: $this.find('.slick-arrow.next'),
                        infinite: true,
                        variableWidth: false,
                        //추가 기능
                        isRunOnLowIE : false,
                        pauseOnArrowClick : true,
                        pauseOnDirectionKeyPush : true,
                        pauseOnSwipe : true,
                        pauseOnDotsClick : true,
                        current : $this.find('.current_number'),
                        total : $this.find('.total_number'),
                        responsive: [
                            {
                              breakpoint: 1401,
                              settings: {
                                slidesToShow : 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '0px',
                                variableWidth: true
                              }
                            }
                        ]
                    });
                });

                
                //소개 - 탭메뉴
                var $IntroTabList = $('.rowgroup2 .intro_tab_list'),
                    $IntroTabItem = $IntroTabList.find('.intro_tab_item'),
                    $IntroTabBtn = $IntroTabItem.find('button.intro_tab_btn'),
                    $YouthHomeGroup = $('.rowgroup2 .youth_home_group');

                $IntroTabBtn.on('click', function(){
                    var $thisBtn = $(this),
                        $thisitem = $thisBtn.parent(),
                        thisIndex = $thisitem.index(),
                        $Otheritem = $thisitem.siblings(),
                        $OtherBtn = $Otheritem.find('.intro_tab_btn');

                    if(thisIndex == 0){
                        $thisBtn.attr('title', '음성청소년문화의집 선택됨');
                    }else if(thisIndex == 1){
                        $thisBtn.attr('title', '대소청소년센터 선택됨');
                    }
                    $thisitem.addClass('active');
                    $OtherBtn.removeAttr('title');
                    $Otheritem.removeClass('active');
                    $YouthHomeGroup.eq(thisIndex).addClass('active').siblings('.youth_home_group').removeClass('active time_ani');
                    $YouthHomeGroup.eq(thisIndex).find('.intro_popup_list').slick('setPosition');
                    $EyhPhotoBox.eq(thisIndex).addClass('active').siblings('.photo_box').removeClass('active time_ani');
                    $EyhPhotoBox.eq(thisIndex).find('.photo_list').slick('setPosition');
                    setTimeout(function(){
                        $YouthHomeGroup.eq(thisIndex).addClass('time_ani');
                        $EyhPhotoBox.eq(thisIndex).addClass('time_ani');
                    }, 1)
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