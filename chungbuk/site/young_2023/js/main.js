(function($) {
    'use strict';

    $(function() {
        /* 2023.11 한신정보기술 안병민 */

        //맞춤청년복지 팝업
        var $WelfareBtn = $('#header .welfare_btn'),
            $YouthServiceBox = $('.youth_service_box'),
            $YouthServiceList = $('.youth_service_list'),
            $YouthServiceWrap = $('.youth_service_wrap'),
            $ServiceCurtainBtn = $YouthServiceWrap.find('.service_curtain button'),
            $YouthCloseBtn = $YouthServiceWrap.find('.close_btn');
    
        $YouthServiceList.slick({
            draggable : false,
            variableWidth: true,
            centerMode: false,
            centerPadding: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,
            slidesPerRow: 1,
            autoplay : false,
            autoplaySpeed : 3000,
            dots: false,
            arrows: false,
            autoplay : false,
            infinite: false,
            prevArrow: $YouthServiceBox.find('.slick-arrow.prev'),
            nextArrow: $YouthServiceBox.find('.slick-arrow.next'),
            //추가 기능
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
                        slidesToShow: 2,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 1001,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                    }
                }
            ]
        });

        $WelfareBtn.on('click', function(){
            $YouthServiceWrap.addClass('on');
            setTimeout(function(){
                $YouthServiceWrap.addClass('time_ani');
            }, 1);
        })
        $ServiceCurtainBtn.on('click', function(){
            $YouthServiceWrap.removeClass('on time_ani');
        });
        $YouthCloseBtn.on('click', function(){
            $YouthServiceWrap.removeClass('on time_ani');
        });



        //비주얼 슬라이드
        var $VisualSlideBox = $('.rowgroup1 .visual_slide_box'),
            $VisualSlideList = $VisualSlideBox.find('.visual_slide_list'),
            $ProgressBox = $VisualSlideBox.find('.progress_box');

        $VisualSlideList.slick({
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
            arrows: true,
            infinite: true,
            prevArrow: $VisualSlideBox.find('.slick-arrow.prev'),
            nextArrow: $VisualSlideBox.find('.slick-arrow.next'),
            //추가 기능
            current : $VisualSlideBox.find('.slick-text.current'),
            total : $VisualSlideBox.find('.slick-text.total'),
            autoArrow : $VisualSlideBox.find('.slick-arrow.auto'),
            pauseText : '정지',
            playText : '재생',
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : false,
            pauseOnDotsClick : true,
        //프로그래스바
        }).on("beforeChange",function(event, slick, currentSlide, nextSlide) {
            $ProgressBox.removeClass('on');
        }).on('afterChange', function(event, slick, current){
            $ProgressBox.addClass('on');
        });
        $ProgressBox.addClass('on');

        var $SlickArrow = $VisualSlideBox.find('.slick-arrow');

        $SlickArrow.on('click', function() {
            var $this = $(this);

            if(!$this.is('.slick-pause')){
                setTimeout(function(){
                    $ProgressBox.addClass('slick_stop');
                }, 1);
            }else{
                setTimeout(function(){
                    $ProgressBox.removeClass('slick_stop');
                }, 1);
            }
        });


        //공지사항 / 보도자료 / 자료실
        var $BoardBox = $('.rowgroup2 .board_box'),
            $BoardTabBox = $('.rowgroup2 .board_tab_box'),
            $BoardTabList = $('.rowgroup2 .board_tab_list');

        $BoardBox.each(function(){
            var $this = $(this),
                $BoardList = $this.find('.board_list');

            $BoardList.slick({
                swipe : true,
                swipeToSlide : true,
                draggable : true,
                variableWidth: true,
                centerMode: false,
                centerPadding: 0,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay : false,
                autoplaySpeed : 3000,
                dots: false,
                arrows: true,
                infinite: true,
                prevArrow: $this.find('.slick-arrow.prev'),
                nextArrow: $this.find('.slick-arrow.next'),
                //추가 기능
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
                        slidesToShow : 3
                      },
                      breakpoint: 801,
                      settings: {
                        slidesToShow : 2
                      }
                    },
                ]
            });
        })


        //공지사항 / 보도자료 / 자료실 - 탭메뉴
        var $BoardTabItem = $BoardTabList.find('.board_tab_item'),
            $BoardTabBtn = $BoardTabItem.find('.board_tab_btn');

        $BoardTabBtn.on('click', function(){
            var $thisBtn = $(this),
                $thisitem = $thisBtn.parent(),
                thisIndex = $thisitem.index(),
                $Otheritem = $thisitem.siblings(),
                $OtherBtn = $Otheritem.find('.board_tab_btn');

            if(thisIndex == 0){
                $thisBtn.attr('title', '공지사항 선택됨');
            }else if(thisIndex == 1){
                $thisBtn.attr('title', '보도자료 선택됨');
            }else if(thisIndex == 2){
                $thisBtn.attr('title', '자료실 선택됨');
            }
            $thisitem.addClass('active');
            $OtherBtn.removeAttr('title');
            $Otheritem.removeClass('active');
            $BoardBox.eq(thisIndex).addClass('active').siblings('.board_box').removeClass('active');
            $BoardBox.eq(thisIndex).find('.board_list').slick('setPosition');
        });


        //Quick메뉴
        var $QuickmenuBox = $('.rowgroup3 .quickmenu_box'),
            $QuickmenuList = $QuickmenuBox.find('.quickmenu_list');

            $QuickmenuList.slick({
            draggable : true,
            variableWidth: false,
            centerMode: false,
            centerPadding: 0,
            slidesToShow: 6,
            slidesToScroll: 1,
            rows: 1,
            slidesPerRow: 1,
            autoplay : false,
            autoplaySpeed : 3000,
            dots: false,
            arrows: true,
            infinite: false,
            prevArrow: $QuickmenuBox.find('.slick-arrow.prev'),
            nextArrow: $QuickmenuBox.find('.slick-arrow.next'),
            //추가 기능
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
                        slidesToShow: 1,
                        rows: 3,
                        slidesPerRow: 2,
                    }
                  },
                {
                  breakpoint: 801,
                  settings: {
                    slidesToShow : 4,
                    rows: 1,
                    slidesPerRow: 1,
                    arrows: false,
                    variableWidth: true,
                  }
                }
            ]
        });


        var $YouthPopupBox = $('.rowgroup3 .youth_popup_box'),
            $YouthPopupList = $('.youth_popup_list');

        $YouthPopupList.slick({
            swipe : true,
            swipeToSlide : true,
            draggable : true,
            variableWidth: true,
            centerMode: false,
            centerPadding: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            autoplaySpeed : 3000,
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: $YouthPopupBox.find('.slick-arrow.prev'),
            nextArrow: $YouthPopupBox.find('.slick-arrow.next'),
            //추가 기능
            current : $YouthPopupBox.find('.slick-text.current .number'),
            total : $YouthPopupBox.find('.slick-text.total .number'),
            autoArrow : $YouthPopupBox.find('.slick-arrow.auto'),
            pauseText : '정지',
            playText : '재생',
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : false,
            pauseOnDotsClick : true
        });


    });
})(window.jQuery);
