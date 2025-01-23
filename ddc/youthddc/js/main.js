(function ($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        $screen = $.screen,
        $inArray = $.inArray;

    $(function () {

        //여기서부터 코드 작성해주세요
        //메인비주얼 영역
        setTimeout(function (){
            $('.main_slide_wrap').addClass('on');
        },1);

        var $MainSlideWrap = $('.main_slide_wrap'),
            $MainSlideList = $MainSlideWrap.find('.main_slide_list');

        $MainSlideList.slick({
            swipe : true,
            swipeToSlide : true,
            draggable : true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed : 3000,
            speed : 1000,
            autoplay : true,
            dots: false,
            arrows: true,
            infinite: true,
            //추가 기능
            prevArrow: $MainSlideWrap.find('.slick-arrow.prev'),
            nextArrow: $MainSlideWrap.find('.slick-arrow.next'),
            autoArrow: $MainSlideWrap.find('.slick-arrow.auto'),
            current : $MainSlideWrap.find('.slick-text.current'),
            total : $MainSlideWrap.find('.slick-text.total'),
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : false,
            pauseOnDotsClick : true,
            customState : function(state) {
                //현재 슬라이드 위치가 10보다 작을 때
                if(state.current < 10) {
                    state.current = '0' + state.current;
                }
                //슬라이드 갯수가 10보다 작을 때
                if(state.total < 10) {
                    state.total = '0' + state.total;
                }
                return state;
            }
        });


        //프로그램 신청 . 공지사항
        var $NoticeBox = $('.notice_box');

        $NoticeBox.each(function (){
            var $this = $(this),
                $MNoticeList = $this.find('.notice_list');

            $MNoticeList.slick({
                swipe : false,
                swipeToSlide : false,
                draggable : false,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay : false,
                dots: false,
                arrows: false,
                infinite: false,
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
                            swipe : true,
                            swipeToSlide : true,
                            draggable : true,
                            variableWidth: true,
                        },
                    },
                    {
                        breakpoint: 501,
                        settings: {
                            swipe : true,
                            swipeToSlide : true,
                            draggable : true,
                            variableWidth: true,
                            slidesToShow: 1,
                        },
                    }
                ],
            });
        });


        //sns
        var $SnsList = $('.sns_list');

        $SnsList.slick({
            swipe : false,
            swipeToSlide : false,
            draggable : false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            arrows: false,
            infinite: false,
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
                        swipe : true,
                        swipeToSlide : true,
                        draggable : true,
                        variableWidth: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 531,
                    settings: {
                        swipe : true,
                        swipeToSlide : true,
                        draggable : true,
                        variableWidth: true,
                        slidesToShow: 1,
                    },
                }
            ],
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
                    $this.addClass('on');
                }else{
                    $this.removeClass('on');
                }
            });
        });
    });
})(jQuery);