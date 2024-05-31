(function($) {
    'use strict';

    function splittingTextDelay (object, speed, delay_speed) {
        var splitLength = $(object).find('.char').length;
        for (var i=0; i<splitLength; i++) {
            if (  $(object).data('css-property') == 'animation' ) {
                $(object).find('.char').eq(i).css('animation-delay',delay_speed+(i*speed)+'s');
            }else if( $(object).data('css-property') == 'transition' ) {
                $(object).find('.char').eq(i).css('transition-delay',delay_speed+(i*speed)+'s');
            }
        }
    }

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        $screen = $.screen,
        $inArray = $.inArray;

    $(function() {
        var $body = $('body'),
            $wrapper = $('#wrapper'),
            $container = $('#container');

        var LayoutType = $body.attr('data-layouttype');
        setTimeout(function(){
            //console.log(mode);
        }, 1);

        var scrollTop = $window.scrollTop(),
            ContainerOffset = $container.offset(),
            wrapperOffset = $wrapper.offset();
        if(LayoutType=='normal'){
            if(scrollTop > wrapperOffset.top) {
                $wrapper.attr('data-nowtop', 'nontop');
            }else{
                $wrapper.attr('data-nowtop', 'top');
            };
        } else if(LayoutType=='visualtype'){
            if(scrollTop > ContainerOffset.top-150) {
                $wrapper.attr('data-nowtop', 'nontop');
            }else{
                $wrapper.attr('data-nowtop', 'top');
            };
        }
        $window.on('scroll', function(event) {
            var scrollTop = $window.scrollTop(),
                ContainerOffset = $container.offset(),
                wrapperOffset = $wrapper.offset(),
                headerIsActive = $wrapper.is('[data-nowtop="top"]');
            if(LayoutType=='normal'){
                if(scrollTop > wrapperOffset.top) {
                    if(headerIsActive){
                        $wrapper.attr('data-nowtop', 'nontop');
                    };
                }else{
                    $wrapper.attr('data-nowtop', 'top');
                };
            } else if(LayoutType=='visualtype'){
                if(scrollTop > ContainerOffset.top-150) {
                    if(headerIsActive){
                        $wrapper.attr('data-nowtop', 'nontop');
                    };
                }else{
                    $wrapper.attr('data-nowtop', 'top');
                };
            }
        });

        //여기서부터 코드 작성
        // 스크롤
        $(function(){
            var $window = $(window),
                $ScrollContent = $('.scroll_content');
        
            $ScrollContent.each(function(){
                var $this = $(this),
                    scrollTop = $window.scrollTop(),
                    scrollBottom = scrollTop + $window.height(),
                    contentOffset = $this.offset();
                if(scrollBottom > contentOffset.top) {
                    $this.addClass('active');
                };
            });

            $window.on('scroll', function(event) {
		
                $ScrollContent.each(function(){
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

        // 메인 비주얼 슬라이드
        var $MainSlideList = $('.main_visual .visual_slide_box .visual_slide_list'),
            $MainSlideBox = $('.main_visual .visual_slide_box');
        $MainSlideList.slick({
            
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots:false,
            arrows: true,
            prevArrow: $('.visual_slide_btn.prev'),
		    nextArrow: $('.visual_slide_btn.next'),
            variableWidth: true,
            infinite: true,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true,
            //추가 기능
            autoArrow : $MainSlideBox.find('.pause'),
            isRunOnLowIE : false,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
            pauseOnDotsClick : true,
            pauseText : '정지',
            playText : '재생',
            current : $MainSlideBox.find('.view_number'),
            responsive : [{
                breakpoint : 1001,
                settings : {
                    variableWidth: false
                }
            }]
        });

        // 청년 지원정보  버튼클릭
        var $YouthSupportBtn = $('.youth_support .youth_support_box .youth_support_left .youth_support_list .youth_support_item .youth_support_text'),
            $YouthSupportSlide = $('.youth_support .youth_support_box .youth_info_right .youth_info_list'),
            $YouthInfoBox = $YouthSupportSlide.parent('.youth_info_box');

        $YouthSupportBtn.on('click', function(){
            var $this = $(this),
                ItemIndex = $this.parent().index(),
                ItemActive = $this.parent().is('.active');
                
            if(!ItemActive){
                $this.parent().addClass('active');
                $this.parent().siblings().removeClass('active');
                $this.attr('title', '선택됨');

                $YouthInfoBox.siblings().removeClass('active');
                $YouthInfoBox.eq(ItemIndex).addClass('active');
                $this.parent().siblings().find($YouthSupportBtn).removeAttr('title');
            }
        });
        $YouthSupportBtn.on('mouseover', function(){
            var $this = $(this),
                ItemActive = $this.parent().is('.active'),
                $YouthSupportLeft = $this.parents('.youth_support_left');

            if(!ItemActive){
                $YouthSupportLeft.addClass("hover_active");
            }
        });

        $YouthSupportBtn.on('mouseleave', function(){
            var $this = $(this),
                $YouthSupportLeft = $this.parents('.youth_support_left');
            $YouthSupportLeft.removeClass("hover_active");
        });
        
        // 청년 지원정보 반응형 슬라이드
        $YouthSupportSlide.each(function(){
            $(this).slick({
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay : false,
                dots:false,
                arrows: false,
                variableWidth: true,
                infinite: false,
                pauseOnDotsHover : true,
                swipe:true,
                swipeToSlide: true,
                draggable:true,
                responsive : [
                    {
                        breakpoint : 1401,
                        settings : {
                            slidesToShow : 3,
                            slidesToScroll : 1
                        }
                    },
                    {
                        breakpoint : 641,
                        settings : {
                            slidesToShow : 1,
                            slidesToScroll : 1
                        }
                    }
                ]
            });
        });

        // 청년 관련사이트 슬라이드
        var $YouthSitelSlide = $('.rowgroup3 .youth_site .youth_site_box .youth_site_list');
        $YouthSitelSlide.slick({
            
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            autoplay : false,
            arrows: false,
            dots:true,
            dotsClass: 'youth_site_dots',
            infinite: false,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true,
            responsive : [{
                breakpoint : 641,
                settings : {
                    rows: 1,
                }
            }]
        });

        var $YouthSlicklSlide = $YouthSitelSlide.find('.slick-slide'),
            $YouthSlickDots = $YouthSitelSlide.find('.youth_site_dots');

        if($YouthSlicklSlide.length < 2){
            $YouthSlickDots.css('display', 'none');
        }

        // 알림존 슬라이드
        var $YouthNoticelSlide = $('.rowgroup4 .youth_notice .wrap .youth_notice_box .youth_notice_right .notice_slide_box .notice_slide_list'),
            $YouthSlideBox = $('.rowgroup4 .youth_notice .wrap .youth_notice_box .youth_notice_right .notice_slide_box');
        $YouthNoticelSlide.slick({

            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay : true,
            dots:false,
            arrows: true,
            prevArrow: $('.notice_slide_btn.prev'),
		    nextArrow: $('.notice_slide_btn.next'),
            infinite: true,
            pauseOnDotsHover : true,
            swipe:true,
            draggable:true,
            //추가 기능
            autoArrow : $YouthSlideBox.find('.pause'),
            isRunOnLowIE : false,
            pauseOnArrowClick : true,
            pauseOnDirectionKeyPush : true,
            pauseOnSwipe : true,
            pauseOnDotsClick : true,
            pauseText : '정지',
            playText : '재생',
            current : $YouthSlideBox.find('.view_number')
        });


        // 청년포털 소통공간 슬라이드
        var $CommunityContentsList = $('.youth_community .youth_community_box .community_contents_box .community_contents_list');
        $CommunityContentsList.each(function(){
            $(this).slick({
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay : false,
                dots:false,
                arrows: false,
                variableWidth: true,
                infinite: false,
                pauseOnDotsHover : false,
                swipe:false,
                swipeToSlide: false,
                draggable:false,
                responsive : [
                    {
                    breakpoint : 1001,
                    settings : {
                        variableWidth: true,
                        slidesToShow: 3,
                        rows:2,
                        slidesPerRow: 2
                    }
                },
                {
                    breakpoint : 641,
                    settings : {
                        vertical:true,
                        variableWidth: false,
                        slidesToShow: 2,
                        rows:1,
                        slidesPerRow: 1,
                        swipe:true,
                        verticalSwiping: true
                    }
                }
            ]
            });
        })

        // 청년포털 소통공간 클릭
        var $CommunityTypeBtn = $('.youth_community .youth_community_box .community_type_box .community_type_list .community_type_item .community_type_btn');
        $CommunityTypeBtn.on('click', function(){
            var $this = $(this),
                ItemIndex = $this.parent().index(),
                ItemActive = $this.parent().is('.active'),
                $CoummunityContentBox = $('.youth_community_box .community_contents_box'),
                $MySlideList = $CoummunityContentBox.find('.community_contents_list').eq(ItemIndex),
                $OtherSlideList = $MySlideList.siblings('.community_contents_list');
                
            if(!ItemActive){
                $this.parent().addClass('active');
                $this.parent().siblings().removeClass('active');
                $OtherSlideList.removeClass('active');
                $MySlideList.addClass('active').slick('setPosition');
                $this.attr('title', '선택됨');
                $this.parent().siblings().find($CommunityTypeBtn).removeAttr('title');
            }
        });
        
        

        $window.on('screen:web screen:tablet screen:phone', function(event) {

        });
    });
})(jQuery);