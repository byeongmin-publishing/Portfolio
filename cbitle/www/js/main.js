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

        // row1 - 메인슬라이드 S
        var $MainSlideInner = $('.main_slide_inner');

        $MainSlideInner.each(function (){
            var $this = $(this),
                $MainSlideList = $this.find('.main_slide_list');

            $MainSlideList.slick({
                draggable : true,
                swipe : true,
                swipeToSlide : true,
                variableWidth : false,
                slidesToShow : 1,
                slidesToScroll : 1,
                autoplay : true,
                autoplaySpeed : 3000,
                speed : 1000,
                dots : false,
                infinite : true,
                arrows : true,
                prevArrow : $this.find('.slick-arrow.prev'),
                nextArrow : $this.find('.slick-arrow.next'),
                autoArrow : $this.find('.slick-arrow.auto'),
                pauseText : '정지',
                playText : '재생',
                current : $this.find('.slick-text.current'),
                total : $this.find('.slick-text.total'),
                isRunOnLowIE: true,
                pauseOnArrowClick : true,
                pauseOnDirectionKeyPush : true,
                pauseOnSwipe : true,
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
        });

        $('.rowgroup1 .main_tab_box .item_btn').on('click', function(){
            var $thisBtn = $(this),
                $MyParent = $thisBtn.parent('.main_tab_item'),
                IsActive = $MyParent.is('.active'),
                $OtherParents = $MyParent.siblings('.main_tab_item'),
                $OtherBtns = $OtherParents.find('.item_btn'),
                ParentsIndex = $MyParent.index();

            if(!IsActive){
                $MyParent.addClass('active');
                $OtherParents.removeClass('active');
                $thisBtn.attr('title', '선택됨');
                $OtherBtns.removeAttr('title');
                $('.main_slide_inner').eq(ParentsIndex).addClass('active').siblings().removeClass('active');
                $('.main_slide_inner').eq(ParentsIndex).find('.main_slide_list').slick('setPosition');
                $('.main_tab_list').addClass('active'+ParentsIndex);

                if (ParentsIndex == 0){
                    $('.main_tab_list').removeClass('active1');
                }
                else {
                    $('.main_tab_list').removeClass('active0');
                }
            }
        });
        // row1 - 메인슬라이드 E


        // row2 - 퀵메뉴 S
        var $QuickMenuList = $('.quick_menu_list');

        $QuickMenuList.slick({
            draggable : false,
            swipe : false,
            swipeToSlide : false,
            variableWidth : false,
            slidesToShow : 8,
            slidesToScroll : 1,
            autoplay : false,
            autoplaySpeed : 3000,
            speed : 1000,
            dots : true,
            appendDots: '.quick_menu_control',
            customPaging: function (slider, i) {
                return '<button class="dots_btn"><span>'+'슬라이드'+i+'</span></button>';
            },
            infinite : false,
            arrows : false,
            responsive: [
                {
                    breakpoint: 801,
                    settings: {
                        swipe : true,
                        slidesToShow : 4,
                        slidesToScroll : 2,
                        slidePerRow : 2,
                        rows : 1
                    },
                },
                {
                    breakpoint: 481,
                    settings: {
                        swipe : true,
                        slidesToShow : 3,
                        slidesToScroll : 3,
                        slidePerRow : 3,
                        rows : 1,
                    },
                }
            ],
        });
        // row2 - 퀵메뉴 E


        // row3 - 충북인평원소식 S
        var $NoticeTabList = $('.notice_tab_list');

        $NoticeTabList.slick({
            draggable : false,
            swipe : false,
            swipeToSlide : false,
            variableWidth : true,
            slidesToShow : 6,
            slidesToScroll : 1,
            autoplay : false,
            autoplaySpeed : 3000,
            speed : 1000,
            dots : false,
            infinite : false,
            arrows : false,
            responsive: [
                {
                    breakpoint: 481,
                    settings: {
                        draggable : true,
                        swipe : true,
                        swipeToSlide : true,
                        slidesToShow : 3,
                        slidesToScroll : 1
                    },
                }
            ],
        });

        $('.rowgroup3 .notice_tab_box .item_btn').on('click', function(){
            var $thisBtn = $(this),
                $MyParent = $thisBtn.parents('.slick-slide').find('.notice_tab_item'),
                IsActive = $MyParent.is('.active'),
                $OtherParents = $thisBtn.parents('.slick-slide').siblings('.slick-slide').find('.notice_tab_item'),
                $OtherBtns = $OtherParents.find('.notice_tab_btn'),
                ParentsIndex = $thisBtn.parents('.slick-slide').index();

            if(!IsActive){
                $MyParent.addClass('active');
                $OtherParents.removeClass('active');
                $thisBtn.attr('title', '선택됨');
                $OtherBtns.removeAttr('title');
                $('.notice_inner').eq(ParentsIndex).addClass('active').siblings().removeClass('active');
            }
        });
        // row3 - 충북인평원소식 E

        // row3 - 명예의 전당 S
        var $HonorSlideList = $('.honor_slide_list'),
            $TextSlideList = $('.honor_text_slide .text_slide_list');

        $HonorSlideList.slick({
            draggable : true,
            swipe : true,
            swipeToSlide : true,
            variableWidth : false,
            slidesToShow : 1,
            slidesToScroll : 1,
            autoplay : false,
            autoplaySpeed : 3000,
            speed : 1000,
            dots : true,
            infinite : true,
            arrows : false,
            appendDots: '.honor_slide_control',
            customPaging: function (slider, i) {
                return '<button class="dots_btn"><span>'+'슬라이드'+i+'</span></button>';
            },
            asNavFor: $TextSlideList
        });

        $TextSlideList.slick({
            fade : true,
            draggable : false,
            swipe : false,
            swipeToSlide : false,
            variableWidth : false,
            slidesToShow : 1,
            slidesToScroll : 1,
            autoplay : false,
            autoplaySpeed : 3000,
            speed : 1000,
            dots : false,
            infinite : true,
            arrows : false
        });
        $HonorSlideList.on('wheel', (function(e) {
            e.preventDefault();

            if($(window).width() > 1000){
                if (e.originalEvent.deltaY < 0) {
                    $(this).slick('slickPrev');
                } else {
                    $(this).slick('slickNext');
                }
            }
        }));
        // row3 - 명예의 전당 E

        // row4 - 충북다모아웹진 S
        var $WebzineSlideBox = $('.webzine_slide_box'),
            $WebzineSlideList = $WebzineSlideBox.find('.webzine_slide_list');

        $WebzineSlideList.slick({
            draggable : true,
            swipe : true,
            swipeToSlide : true,
            variableWidth : false,
            slidesToShow : 1,
            slidesToScroll : 1,
            autoplay : false,
            autoplaySpeed : 3000,
            speed : 1000,
            dots : false,
            infinite : true,
            arrows : true,
            prevArrow : $WebzineSlideBox.find('.slick-arrow.prev'),
            nextArrow : $WebzineSlideBox.find('.slick-arrow.next')
        });
        // row4 - 충북다모아웹진 E

        // row4 - 소통하는 충북인평원 S

        var $MediaSlideInner = $('.media_slide_inner');

        var $Swiper = new Swiper($MediaSlideInner, {
            direction: 'horizontal',
            loop: false,
            freeMode: false,
            mousewheel:true,
            watchOverflow: true,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            watchSlidesVisibility : true,
            scrollbar: {
                el: '.media_scrollbar',
                draggable: true
            },
            breakpoints: {

                1300: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 1,
                }
            }
        });
        // row4 - 소통하는 충북인평원 E

        // row5 - 미디어로 보는 충북인평원 이야기 S
        var $StorySlideInner = $('.story_slide_inner');

        $StorySlideInner.each(function () {
            var $this = $(this),
                $StorySlideList = $this.find('.story_slide_list'),
                $StoryProgress = $this.find('.story_slide_progress'),
                $ProgressBar = $StoryProgress.find('.percent');

            $StorySlideList.slick({
                draggable : true,
                swipe : true,
                swipeToSlide : true,
                variableWidth : false,
                slidesToShow : 3,
                slidesToScroll : 1,
                autoplay : false,
                speed : 800,
                dots : false,
                infinite : false,
                arrows : true,
                prevArrow : $this.find('.slick-arrow.prev'),
                nextArrow : $this.find('.slick-arrow.next'),
                responsive: [
                    {
                        breakpoint: 1301,
                        settings: {
                            slidesToShow : 2,
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow : 1,
                        }
                    }
                ],
            });
            var updateProgressBar = function(slick, nextSlide) {
                var totalSlides = slick.$slides.length,
                    slidesToShow = slick.options.slidesToShow,
                    maxSteps = totalSlides - slidesToShow + 1,
                    stepPercentage = 100 / maxSteps,
                    progress;

                if (totalSlides <= slidesToShow) {
                    progress = 100;
                } else {
                    progress = ((nextSlide + 1) / maxSteps) * 100;
                }

                $ProgressBar.css('width', progress + '%');
            };

            $StorySlideList.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                updateProgressBar(slick, nextSlide);
            });

            updateProgressBar($StorySlideList.slick('getSlick'), 0);
        });

        $('.rowgroup5 .story_tab_box .item_btn').on('click', function(){
            var $thisBtn = $(this),
                $MyParent = $thisBtn.parent('.story_tab_item'),
                IsActive = $MyParent.is('.active'),
                $OtherParents = $MyParent.siblings('.story_tab_item'),
                $OtherBtns = $OtherParents.find('.item_btn'),
                ParentsIndex = $MyParent.index();

            if(!IsActive){
                $MyParent.addClass('active');
                $OtherParents.removeClass('active');
                $thisBtn.attr('title', '선택됨');
                $OtherBtns.removeAttr('title');
                $('.story_slide_inner').eq(ParentsIndex).addClass('active').siblings().removeClass('active');
                $('.story_slide_inner').eq(ParentsIndex).find('.story_slide_list').slick('setPosition');
            }
        });
        // row5 - 미디어로 보는 충북인평원 이야기 E

        // row6 - 평생학습도시 현황 S
        var $MapActiveImg = $('.rowgroup6 .map_box .map_active_img');

        $MapActiveImg.rwdImageMaps();

        $('.rowgroup6 .map_tab_box .item_btn').on('click', function(){
            var $thisBtn = $(this),
                $MyParent = $thisBtn.parent('.map_tab_item'),
                IsActive = $MyParent.is('.active'),
                $OtherParents = $MyParent.siblings('.map_tab_item'),
                $OtherBtns = $OtherParents.find('.item_btn'),
                ParentsIndex = $MyParent.index();

            if(!IsActive){
                $MyParent.addClass('active');
                $OtherParents.removeClass('active');
                $thisBtn.attr('title', '선택됨');
                $OtherBtns.removeAttr('title');
                $('.map_info_item').eq(ParentsIndex).addClass('active').siblings().removeClass('active');
                $('.map_active_img').attr('src', '/site/www/images/main/map_active'+ParentsIndex+'.png');
                $('.map_active_img').attr('alt', $thisBtn.text()+'선택됨');
            }
        });

        var $Mapping = $('.map .mapping');

        $Mapping.on('mouseover focusin', function() {
            var $thissrcIndex = $(this).index();

            $('.map_hover_img').css({'backgroundImage': 'url(/site/www/images/main/map_over'+$thissrcIndex + '.png)'});
        });

        $Mapping.on('mouseout focusout', function() {
            $('.map_hover_img').css({'backgroundImage': 'none'});
        });

        $Mapping.on('click', function(e) {
            e.preventDefault();

            var $thissrcIndex = $(this).index(),
                $thisplace = $(this).attr('alt');

            $('.map_active_img').attr('src', '/site/www/images/main/map_active'+$thissrcIndex+'.png');
            $('.map_active_img').attr('alt', $thisplace+'선택됨');
            $('.map_info_item').eq($thissrcIndex).addClass('active').siblings().removeClass('active');
            $('.map_tab_item').eq($thissrcIndex).addClass('active').siblings().removeClass('active');
            $('.item_btn').removeAttr('title');
            $('.map_tab_item').eq($thissrcIndex).find('.item_btn').attr('title', '선택됨');
        });
        // row6 - 평생학습도시 현황 E
    });
})(jQuery);