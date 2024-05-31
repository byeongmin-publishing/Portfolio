
'use strict';

try {
    //제이쿼리가 있으면
    this.jQuery = this.jQuery || undefined;

    //제이쿼리가 있으면
    if(jQuery) {
        //$ 중복방지
        (function($) {
            $(function() {
                //메인슬라이드
                var bullet = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

                var swiper = new Swiper('.main_slide_box', {
                    slidesPerView: 1,
                    loop: true,
                    loopAdditionalSlides : 3,
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<div class="' + className + '"><button type="button" class="slide_dots_item">' + (bullet[index]) + '</button><svg class="bu_percent" width="42" height="42" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M163 84C163 127.63 127.63 163 84 163C40.3695 163 5 127.63 5 84C5 40.3695 40.3695 5 84 5C127.63 5 163 40.3695 163 84Z" stroke="red" stroke-width="6"/></div>';
                          },
                    },
                    navigation: {
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                      },
                });

                $('.main_slide_arrow').on('click', function(){
                    swiper.autoplay.stop();
                    $('.main_slide_arrow.pause').hide();
                    $('.main_slide_arrow.play').show();
                });
                $('.main_slide_arrow.play').on('click', function(){
                    swiper.autoplay.start();
                    $('.main_slide_arrow.play').hide();
                    $('.main_slide_arrow.pause').show();
                });


                /*2. 나드리 페스티벌 / 이벤트*/
                var $EventSlideBox = $('.rowgroup2 .event_slide_box'),
                    $EventSlideList = $EventSlideBox.find('.event_slide_list');

                $EventSlideList.slick({
                    swipe : true,
                    swipeToSlide : true,
                    draggable : true,
                    variableWidth: true,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay : false,
                    autoplaySpeed : 3000,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    //추가 기능
                    prevArrow: $EventSlideBox.find('.slick-arrow.prev'),
                    nextArrow: $EventSlideBox.find('.slick-arrow.next'),
                    autoArrow : $EventSlideBox.find('.slick-arrow.auto'),
                    pauseText : '정지',
                    playText : '재생',
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                });


                /*3. 빠른 서비스*/
                var $CultureMenuBox = $('.rowgroup3 .culture_menu_box'),
                $CultureMenuList = $CultureMenuBox.find('.culture_menu_list');

                $CultureMenuList.slick({
                    swipe : false,
                    swipeToSlide : false,
                    draggable : false,
                    variableWidth: true,
                    centerMode: false,
                    centerPadding: 0,
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    prevArrow: $CultureMenuBox.find('.slick-arrow.prev'),
                    nextArrow: $CultureMenuBox.find('.slick-arrow.next'),
                    infinite: false,
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
                            swipe : true,
                            draggable : true,
                            slidesToShow: 6,
                            slidesToScroll: 3,
                            variableWidth: false,
                            arrows: true,
                          }
                        },
                        {
                            breakpoint: 641,
                            settings: {
                              swipe : true,
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              variableWidth: false,
                              arrows: true,
                            }
                          }
                    ]
                });


                /*3. 교통 탭*/
                var $TrafficTabBtn = $('.rowgroup3 .traffic_tab_btn');


                $TrafficTabBtn.on('mouseenter', function(){
                    var $this = $(this),
                        $TrafficTabItem = $this.parent(),
                        TrafficIndex = $TrafficTabItem.index();

                    $TrafficTabItem.addClass('over_active');
                    $TrafficTabItem.siblings().addClass('remove_active');
                    $('.active_line').removeClass('bus train airplane');

                    if(TrafficIndex == 0){
                        $('.active_line').addClass('bus');
                    }else if(TrafficIndex == 1){
                        $('.active_line').addClass('train');
                    }else if(TrafficIndex == 2){
                        $('.active_line').addClass('airplane');
                    }
                });

                $TrafficTabBtn.on('mouseleave', function(){
                    var $this = $(this),
                        $TrafficTabItem = $this.parent(),
                        $TrafficActive = $('.traffic_tab_item.active'),
                        TrafficPosition = $TrafficActive.position().top;
                        $('.active_line').removeClass('bus train airplane');

                        if(TrafficPosition == 168){
                            $('.active_line').addClass('bus');
                        }else if(TrafficPosition == 212){
                            $('.active_line').addClass('train');
                        }else if(TrafficPosition == 392){
                            $('.active_line').addClass('airplane');
                        }

                        if($(window).width() <= 1280){

                            if(TrafficPosition == 130){
                                $('.active_line').addClass('bus');
                            }else if(TrafficPosition == 174){
                                $('.active_line').addClass('train');
                            }else if(TrafficPosition == 348){
                                $('.active_line').addClass('airplane');
                            }
                        }

                    $TrafficTabItem.removeClass('over_active');
                    $TrafficTabItem.siblings().removeClass('remove_active');

                });
                if($(window).width() <= 1000){
                    $TrafficTabBtn.off();
                };

                $TrafficTabBtn.on('click', function(){
                    var $this = $(this),
                        $TrafficTabItem = $this.parent(),
                        $OtherTabItem = $TrafficTabItem.siblings(),
                        $OtherTabBtn = $OtherTabItem.find('.traffic_tab_btn'),
                        TrafficIndex = $TrafficTabItem.index();

                    $('.active_line').removeClass('bus train airplane');

                    if(TrafficIndex == 0){
                        $('.active_line').addClass('bus');
                    }else if(TrafficIndex == 1){
                        $('.active_line').addClass('train');
                    }else if(TrafficIndex == 2){
                        $('.active_line').addClass('airplane');
                    }

                    $OtherTabItem.removeClass('active');
                    $TrafficTabItem.addClass('active');
                    $OtherTabBtn.removeAttr('title');
                    $this.attr('title', '선택됨');

                    var $TrafficBox = $('.traffic_box');

                    $TrafficBox.eq(TrafficIndex).addClass('active').siblings().removeClass('active time_ani');
                    setTimeout(function(){
                        $TrafficBox.eq(TrafficIndex).addClass('time_ani');
                    }, 1)
                });


                /*4. 충북은 지금 - 팝업*/
                var $PopupSlideBox = $('.rowgroup4 .popup_slide_box'),
                $PopupSlideList = $PopupSlideBox.find('.popup_slide_list');

                $PopupSlideList.slick({
                    swipe : true,
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
                    infinite: false,
                    //추가 기능
                    total : $PopupSlideBox.find('.slide_text.total em'),
                    current : $PopupSlideBox.find('.slide_text.current em'),
                    prevArrow: $PopupSlideBox.find('.slick-arrow.prev'),
                    nextArrow: $PopupSlideBox.find('.slick-arrow.next'),
                    autoArrow : $PopupSlideBox.find('.slick-arrow.auto'),
                    pauseText : '정지',
                    playText : '재생',
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                });


                //5. 즐거운 나드리 bg
                var Bgswiper = new Swiper('.bg_slide_box', {
                    slidesPerView: 1,
                    loop: true,
                    loopAdditionalSlides : 5,
                    touchRatio: 0,
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                });

                //5. 즐거운 나드리
                var Galleryswiper = new Swiper('.gallery_slide_box', {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 60,
                    loop: true,
                    loopAdditionalSlides : 5,
                    centeredSlides: true,
                    watchSlidesVisibility: true,
                    navigation: {
                        prevEl: ".swiper-arrow.prev",
                        nextEl: ".swiper-arrow.next",
                    },
                    breakpoints: {
                        1000: {
                            spaceBetween: 40,
                        },
                        800: {
                            slidesPerView: 1,
                            spaceBetween: 25,
                        }
                    }
                });

                Galleryswiper.controller.control = Bgswiper;


                //함께하는 나드리
                var $SnsTabBtn = $('.rowgroup6 .sns_tab_btn'),
                    $SnsTabLink = $('.rowgroup6 a.sns_tab_btn');

                $SnsTabBtn.on('click', function(){
                    var $this = $(this),
                        $SnsTabItem = $this.parent(),
                        $OtherTabItem = $SnsTabItem.siblings(),
                        $OtherTabBtn = $OtherTabItem.find('.sns_tab_btn'),
                        SnsTabIndex = $SnsTabItem.index();

                    $OtherTabItem.removeClass('active');
                    $SnsTabItem.addClass('active');
                    $OtherTabBtn.removeAttr('title');
                    $this.attr('title', '선택됨');

                    var $SnsList = $('.sns_list');

                    $SnsList.eq(SnsTabIndex).addClass('active').siblings().removeClass('active time_ani');
                    setTimeout(function(){
                        $SnsList.eq(SnsTabIndex).addClass('time_ani');
                    }, 1)
                });
                $SnsTabLink.on('click', function(){
                    $('.rowgroup6 .sns_tab_list .sns_tab_item').removeClass('active')
                    $('.rowgroup6 .sns_tab_list .sns_tab_item').eq(0).find('.sns_tab_btn').removeAttr('title');
                    $('.rowgroup6 .sns_tab_list .sns_tab_item').eq(0).addClass('active');
                    $('.rowgroup6 .sns_tab_list .sns_tab_item').eq(0).find('.sns_tab_btn').attr('title', '선택됨');
                    $('.sns_list').eq(0).addClass('active').siblings().removeClass('active time_ani');
                });
            });


            //스크롤 컨텐츠
            $(window).on('scroll', function(){
                var ScrollTop = $(this).scrollTop();
                
                if(ScrollTop >= 800){
                    $('.rowgroup2').addClass('on');
                }else if(ScrollTop < 800){
                    $('.rowgroup2').removeClass('on');
                }
            });


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

        })(jQuery);
    }
}catch(e) {
    console.error(e);
}
