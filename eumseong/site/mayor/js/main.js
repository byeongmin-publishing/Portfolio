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

                
                var $MainSlideBox = $('.rowgroup1 .visual_wrap .main_slide_box'),
                    $MainSlideList = $MainSlideBox.find('.main_slide_list');

                //메인슬라이드
                $MainSlideList.slick({

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    prevArrow: $MainSlideBox.find('.slick-arrow.prev'),
                    nextArrow: $MainSlideBox.find('.slick-arrow.next'),
                    infinite: true,
                    variableWidth: false,
                    //추가 기능
                    isRunOnLowIE : false,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : true,
                    pauseOnDotsClick : true
                }).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
                    $MainSlideList.find('.main_slide_item em').removeClass("time_ani");
                }).on("afterChange", function(event, slick, current){
                    $MainSlideList.find('.main_slide_item em').addClass("time_ani");
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
                        setTimeout(function(){
                            $ItemTopTyping.find("em").addClass("time_ani");
                        }, 1)
                    }
                    for(var i = 0; i < $TextBotSlice.length; i++){
                        $ItemBotTyping.append("<em>"+$TextBotSlice[i]+"</em>");
                        setTimeout(function(){
                            $ItemBotTyping.find("em").addClass("time_ani");
                        }, 1)
                    }
                });


                var $GallerySlideBox = $('.rowgroup2 .gallery_slide_box'),
                $GallerySlideList = $GallerySlideBox.find('.gallery_slide_list');

                //사진으로 만나는 열린군정
                $GallerySlideList.slick({

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    centerMode: false,
                    centerPadding: '0px',
                    variableWidth: false,
                    prevArrow: $GallerySlideBox.find('.slick-arrow.prev'),
                    nextArrow: $GallerySlideBox.find('.slick-arrow.next'),
                    infinite: true,
                    //추가 기능
                    isRunOnLowIE : false,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : true,
                    pauseOnDotsClick : true
                }).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
                    $GallerySlideList.find('.slick-slide').removeClass("time_ani");
                }).on("afterChange", function(event, slick, current){
                    setTimeout(function(){
                        $GallerySlideList.find('.slick-slide.slick-active').addClass("time_ani");
                    }, 1)
                });

                $GallerySlideList.find('.slick-slide.slick-active').addClass("time_ani");


                //공약
                var $PledgeTabBtn = $('.pledge_tab_btn');

                    $PledgeTabBtn.on('click', function(){
                        var $this = $(this),
                            $PledgeTabItem = $this.parent(),
                            $OtherTabItem = $PledgeTabItem.siblings(),
                            $OtherTabBtn = $OtherTabItem.find('.pledge_tab_btn'),
                            PledgeIndex = $PledgeTabItem.index();

                        $OtherTabItem.removeClass('active');
                        $PledgeTabItem.addClass('active');
                        $OtherTabBtn.removeAttr('title');
                        if(PledgeIndex == 0){
                            $this.attr('title', '지역경제 선택됨');
                        }else if(PledgeIndex == 1){
                            $this.attr('title', '균형발전 선택됨');
                        }else if(PledgeIndex == 2){
                            $this.attr('title', '평생복지 선택됨');
                        }else if(PledgeIndex == 3){
                            $this.attr('title', '교육문화 선택됨');
                        }else if(PledgeIndex == 4){
                            $this.attr('title', '안전환경 선택됨');
                        }

                        var $PledgeItem = $('.pledge_item');

                        $PledgeItem.eq(PledgeIndex).addClass('item_active').siblings().removeClass('item_active time_ani');
                        setTimeout(function(){
                            $PledgeItem.eq(PledgeIndex).addClass('time_ani');
                        }, 1)
                    })

                
                

                
                


                

                //스크롤
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