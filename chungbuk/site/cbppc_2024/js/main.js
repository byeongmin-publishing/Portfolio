(function ($) {
    'use strict';

    $(function () {
        var $window = $(window),
            $container = $('#container');

        
        //1.메인슬라이드
        var $MainSlideBox = $('.rowgroup1 .main_slide_box'),
            $MainSlideList = $MainSlideBox.find('.main_slide_list');

        $MainSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            infinite: true,
            total : $MainSlideBox.find('.slick-text.total em'),
            current : $MainSlideBox.find('.slick-text.current em'),
            prevArrow: $MainSlideBox.find('.slick-arrow.prev'),
            nextArrow: $MainSlideBox.find('.slick-arrow.next'),
            autoArrow : $MainSlideBox.find('.slick-arrow.auto'),
            pauseText : '정지',
            playText : '재생',
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
        });
        $MainSlideList.on("beforeChange",function(event, slick, currentSlide, nextSlide) {
            $('.main_slide_box .title_box').removeClass('on');
            $('.main_slide_box .deco01').removeClass('on');
            $('.main_slide_box .deco02').removeClass('on');
            $('.main_slide_box .progress').removeClass('on');
        })
        $MainSlideList.on('afterChange', function(event, slick, current){
            $('.main_slide_box .title_box').addClass('on');
            $('.main_slide_box .deco01').addClass('on');
            $('.main_slide_box .deco02').addClass('on');
            $('.main_slide_box .progress').addClass('on');
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
            $('.main_slide_box .title_box').addClass('on');
            $('.main_slide_box .deco01').addClass('on');
            $('.main_slide_box .deco02').addClass('on');
            $('.main_slide_box .progress').addClass('on');
            $('.main_quick_box').addClass('on');
        },1)


        //1.메인슬라이드 메뉴
        var $MainSlideBox = $('.rowgroup1 .main_quick_box'),
            $MainSlideList = $MainSlideBox.find('.main_quick_list');

        $MainSlideList.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth:true,
            autoplay : false,
            dots: false,
            arrows: false,
            infinite: false,
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
            responsive: [
                {
                  breakpoint: 801,
                  settings: {
                    slidesToShow : 3,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 641,
                    settings: {
                      slidesToShow : 2,
                      slidesToScroll: 1,
                    }
                  }
            ]
        });
        

        //2.보도자료, 알림자료
        $('.notice_tab_btn').on('click', function(){
			var $thisBtn = $(this),
				$MyParent = $thisBtn.parent('.notice_tab_item'),
				IsActive = $MyParent.is('.active'),
				ParentIndex = $MyParent.index(),
				$OtherParents = $MyParent.siblings('.notice_tab_item'),
				$OtherBtns = $OtherParents.find('.notice_tab_btn'),
				$NoticeInner = $('.notice_inner'),
				$OtherNoticeInner = $NoticeInner.siblings('.notice_inner');
			if(!IsActive){
				$OtherParents.removeClass('active');
				$OtherBtns.removeAttr('title');
				$MyParent.addClass('active');
				$thisBtn.attr('title', '선택됨');
				$OtherNoticeInner.removeClass('active');
				$NoticeInner.eq(ParentIndex).addClass('active');
			}
		});


        //2.위원회 주요활동
        var $PopupSlideBox = $('.rowgroup2 .popup_slide_box'),
            $PopupSlideList = $PopupSlideBox.find('.popup_slide_list');

        $PopupSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: $PopupSlideBox.find('.slick-arrow.prev'),
            nextArrow: $PopupSlideBox.find('.slick-arrow.next'),
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
        });


        //3.홍보동영상
        var $VideoSlideBox = $('.rowgroup3 .video_slide_box'),
            $VideoSlideList = $VideoSlideBox.find('.video_slide_list');

        $VideoSlideList.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: $VideoSlideBox.find('.slick-arrow.prev'),
            nextArrow: $VideoSlideBox.find('.slick-arrow.next'),
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
            responsive: [
                {
                  breakpoint: 1001,
                  settings: {
                    slidesToShow : 2,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 641,
                    settings: {
                      slidesToShow : 1,
                      slidesToScroll: 1,
                    }
                  }
            ]
        });


        //스크롤이벤트
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
})(jQuery);
