(function ($) {
    'use strict';

    $(function () {
        //1.메인슬라이드
        var $MainSlideBox = $('.rowgroup1 .main_slide_box'),
            $MainSlideList = $MainSlideBox.find('.main_slide_list');

        $MainSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots: false,
            arrows: true,
            infinite: true,
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
        $MainSlideBox.on('mouseenter', function(){
            $('.slide_control_box').addClass('on');
        });
        $MainSlideBox.on('mouseleave', function(){
            $('.slide_control_box').removeClass('on');
        });


        //2.공연안내 - 슬라이드
        var $PerformanceSlideBox = $('.performance_slide_box');

        $PerformanceSlideBox.each(function(){
            var $this = $(this),
                $PerformanceSlideList = $this.find('.performance_slide_list');

            $PerformanceSlideList.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay : false,
                dots: false,
                arrows: true,
                infinite: true,
                variableWidth: true,
                prevArrow: $this.find('.slick-arrow.prev'),
                nextArrow: $this.find('.slick-arrow.next'),
                isRunOnLowIE : false,
                pauseOnFocus: true,
                pauseOnArrowClick : true,
                pauseOnDirectionKeyPush : true,
                pauseOnSwipe : true,
                responsive: [
                    {
                        breakpoint: 1401,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 1001,
                        settings: {
                            slidesToShow: 3,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 801,
                        settings: {
                            slidesToShow: 2,
                            variableWidth: false,
                        }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false,
                        }
                    }
                ]
            });

            if($this.find('.performance_slide_item').length < 5){
                $this.find('.performance_slide_control').addClass('dis');
            }
        });

        

        //2.공연안내 - 탭
        var $DateBtn = $('.rowgroup2 button.date_btn');

        $DateBtn.on('click', function(){
            var $this = $(this),
                $DateItem = $this.parent(),
                $OtherTabItem = $DateItem.siblings(),
                $OtherTabBtn = $OtherTabItem.find('.date_btn'),
                DateIndex = $DateBtn.index($(this));

            $OtherTabBtn.removeAttr('title');
            $this.attr('title', '선택됨');

            $PerformanceSlideBox.eq(DateIndex).addClass('active').siblings().removeClass('active');
            $PerformanceSlideBox.eq(DateIndex).find('.performance_slide_list').slick('setPosition');
        });

    
        //3.충북도립교향악단 소식
        var $PopupSlideBox = $('.rowgroup3 .popup_slide_box'),
            $PopupSlideList = $PopupSlideBox.find('.popup_slide_list');

        $PopupSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots: false,
            arrows: true,
            infinite: true,
            total : $PopupSlideBox.find('.slick-text.total em'),
            current : $PopupSlideBox.find('.slick-text.current em'),
            prevArrow: $PopupSlideBox.find('.slick-arrow.prev'),
            nextArrow: $PopupSlideBox.find('.slick-arrow.next'),
            autoArrow : $PopupSlideBox.find('.slick-arrow.auto'),
            pauseText : '정지',
            playText : '재생',
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
        });


        //4.유튜브 - 썸네일
        var $YoutubeThumnailBox = $('.rowgroup4 .youtube_thumnail_box'),
            $YoutubeThumnailList = $YoutubeThumnailBox.find('.youtube_thumnail_list');

        $YoutubeThumnailList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            arrows: false,
            infinite: true,
            draggable: false,
            asNavFor: '.youtube_slide_list',
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
                        asNavFor: '.text_slide_list',
                    }
                },
            ]
        });

        //4.유튜브 - 텍스트
        var $TextSlideBox = $('.rowgroup4 .text_slide_box'),
            $TextSlideList = $TextSlideBox.find('.text_slide_list');

        $TextSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            arrows: false,
            prevArrow: $TextSlideBox.find('.slick-arrow.prev'),
            nextArrow: $TextSlideBox.find('.slick-arrow.next'),
            infinite: true,
            draggable: false,
            asNavFor: '.youtube_slide_list',
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
                        arrows: true,
                        asNavFor: '.youtube_thumnail_list',
                    }
                },
            ]
        });

        //4.유튜브 - 슬라이드
        var $YoutubeSlideBox = $('.rowgroup4 .youtube_slide_box'),
            $YoutubeSlideList = $YoutubeSlideBox.find('.youtube_slide_list');

        $YoutubeSlideList.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : false,
            dots: false,
            variableWidth: true,
            arrows: true,
            infinite: true,
            prevArrow: $YoutubeSlideBox.find('.slick-arrow.prev'),
            nextArrow: $YoutubeSlideBox.find('.slick-arrow.next'),
            asNavFor: '.youtube_thumnail_list, .text_slide_list', 
            isRunOnLowIE : false,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
            focusOnSelect: true,
        }).on('afterChange', function(event, slick, current){
            setTimeout(function(){
                $YoutubeSlideBox.find('.slick-active').attr('tabindex', '-1')
                $YoutubeSlideBox.find('.slick-active').next().attr('tabindex', '0')
            }, 1)
        });

        $YoutubeSlideBox.find('.slick-active').attr('tabindex', '-1')
        $YoutubeSlideBox.find('.slick-active').next().attr('tabindex', '0')


        //5.포토갤러리
        var $GallerySlideBox = $('.rowgroup5 .gallery_slide_box'),
            $GallerySlideList = $GallerySlideBox.find('.gallery_slide_list');

        $GallerySlideList.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            autoplay : false,
            dots: false,
            arrows: false,
            infinite: false,
            variableWidth: true,
            pauseOnFocus: true,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true, 
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                }
            ]
        });


        /* 배너모음 */
		var $footer = $('#footer'),
            $banner = $footer.find('.banner'),
            $bannerList = $banner.find('.banner_list'),
            $bannerPrev = $banner.find('.banner_prev'),
            $bannerAuto = $banner.find('.banner_auto'),
            $bannerNext = $banner.find('.banner_next');

        $bannerList.slick({
            draggable: false,
            infinite: true,
            variableWidth: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            playText: '재생',
            pauseText: '정지',
            autoArrow: $bannerAuto,
            prevArrow: $bannerPrev,
            nextArrow: $bannerNext,
        });

        /* 상단으로 */
        var $bodyHtml = $('body,html'),
            $upButton = $footer.find('.top_btn');

        $upButton.click(function () {
            $bodyHtml.stop().animate({
                scrollTop: 0
            }, 250);
        });


        /*스크롤 컨텐츠 */
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
