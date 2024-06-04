//프로그래스바
var myAnim;
var myTextAnim;
var Nowprogress = 0;

function Loading(){
	Nowprogress = 0;
	var count = $('#count');
	myTextAnim = $({ Counter: 0 }).animate({ Counter: 100 }, {
	  duration: 5000,
	  easing: 'linear',
	  step: function () {
		count.text(Math.ceil(this.Counter)+ "%");
        Nowprogress = Math.ceil(this.Counter);
	  }
	});
	var s = Snap('#animated');
	var progress = s.select('#progress');
	progress.attr({strokeDasharray: '0, 251.2'});
	myAnim = Snap.animate(0,251.2, function( value ) {
		progress.attr({ 'stroke-dasharray':value+',251.2'});
	}, 5000);
}

function Loadingpause(){
	myAnim.pause();
	myTextAnim.stop(true,false);
    Nowprogress = myTextAnim[0].Counter;
	$('#count').text(myTextAnim[0].Counter+'%');
	console.log(myTextAnim[0].Counter);
}

function Loadingresume(){
	var Nowduration = 30*(100-Nowprogress);
	var count = $('#count');
	myTextAnim = $({ Counter: Nowprogress }).animate({ Counter: 100 }, {
	  duration: Nowduration,
	  easing: 'linear',
	  step: function () {
		count.text(Math.ceil(this.Counter)+ "%");
	  }
	});
	var s = Snap('#animated');
	var progress = s.select('#progress');
	var NowDegree = (251.2/100)*Nowprogress;
	progress.attr({strokeDasharray: NowDegree+', 251.2'});
	myAnim = Snap.animate(NowDegree,251.2, function( value ) {
		progress.attr({ 'stroke-dasharray':value+',251.2'});
	}, Nowduration, function(){

	});
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

                // 메인 비주얼 슬라이드 - 번호, 텍스트, 슬라이드 컨트롤 bg
                var $MainSlideBox = $('.main_slide_box'),
                    $MainSlideList = $MainSlideBox.find('.main_slide_list'),
                    $MainSlideItem = $MainSlideList.find('.main_slide_item'),
                    $MainSlideAutoBtn = $('.rowgroup1 .slide_control_item .slide_control_btn'),
                    $MainSlideArrows = $('.rowgroup1 .main_slide_box .slide_number_box .slide_number_btn');

                var $PrevNumber = $('.slide_number_item.prev .slide_number_btn .btn_number'),
                    $NextNumber = $('.slide_number_item.next .slide_number_btn .btn_number'),
                    $PrevText = $('.slide_number_item.prev .slide_number_btn .btn_text'),
                    $NextText = $('.slide_number_item.next .slide_number_btn .btn_text');
                    $SlideControlBg = $('.slide_control_box .slide_control_item');

                $MainSlideList.on('init afterChange', function(event, slick, currentSlide){
                    var i = (currentSlide ? currentSlide : 0) + 1;

                    $PrevNumber.text('10');
                    $PrevText.text('물맑음수목원');
                    if(currentSlide > 0){
                        $PrevNumber.text('0' + (i - 1));
                        $PrevText.text($MainSlideItem.eq(i - 2).find('.big_title').text());
                    }
                    $NextNumber.text('0' + (i + 1));
                    $NextText.text($MainSlideItem.eq(i).find('.big_title').text());
                    $SlideControlBg.css('background-image','url(../culture/images/main/main_slide_bg0'+(i)+'.jpg)');
                    if(currentSlide == 9){
                        $NextNumber.text('01');
                        $NextText.text('정약용유적지');
                        $SlideControlBg.css("background-image","url(../culture/images/main/main_slide_bg10.jpg)");
                    }
                    if(currentSlide == 8){
                        $NextNumber.text('10');
                    }
                    
                });


                // 메인 비주얼 슬라이드
                $MainSlideList.on('init', function(event, slick, currentSlide){
                    Loading();
                });
                $MainSlideList.slick({
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay : true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    prevArrow: $MainSlideBox.find('.slide_number_item.prev .slide_number_btn'),
                    nextArrow: $MainSlideBox.find('.slide_number_item.next .slide_number_btn'),
                    autoArrow : $MainSlideBox.parent().find('.slide_control_btn'),
                    isRunOnLowIE : false,
                    pauseOnFocus: true,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    pauseText : '정지',
                    playText : '재생'
                });


                // 메인 비주얼 슬라이드 - 프로그래스바
                $MainSlideList.on('beforeChange', function(event, slick, currentSlide) {
                    var IsAutoplay = $MainSlideAutoBtn.is('.slick-pause');
                    if(IsAutoplay){
                        Loading();
                    }
                });

                $MainSlideAutoBtn.on('click', function(){
                    var $this = $(this),
                        IsPlaying = $this.is('.slick-play');
                    if(IsPlaying){
                        Loadingpause();
                    }else{
                        Loadingresume();
                    }
                });

                $MainSlideArrows.on('click', function(){
                    Loadingpause();
                });
                
                $MainSlideList.on({
                    mousedown: function(){
                        var IsPlaying = $MainSlideAutoBtn.is('.slick-pause');
                        
                        if(IsPlaying){
                            $MainSlideAutoBtn.click();
                            console.log(Nowprogress);
                        }
                    }
                });


                
                //페스티벌
                var $FestivalTabBtn = $('.festival_tab_btn');
                var $FestivalSlideList = $('.festival_slide_list');

                //페스티벌 슬라이드
                $FestivalSlideList.each(function(){
                    var $this = $(this),
                        $FestivalSlideBox = $this.parent(),
                        $FestivalSlideWrap = $FestivalSlideBox.parent('.festival_slide_wrap'),
                        $FestivalSlideControlbox = $FestivalSlideWrap.find('.festival_slidecontrol_box'),
                        $progressBar = $FestivalSlideControlbox.find('.progress'),
                        $progressBarLabel = $FestivalSlideControlbox.find( '.slider_label' );
                    $this.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay : false,
                        dots: false,
                        arrows: true,
                        prevArrow: $FestivalSlideWrap.find('.slide_btn.prev'),
                        nextArrow: $FestivalSlideWrap.find('.slide_btn.next'),
                        infinite: false,
                        fade: true,
                        swipe : true,
                        swipeToSlide : true,
                        draggable : true,
                        //추가 기능
                        isRunOnLowIE : false,
                        pauseOnArrowClick : true,
                        pauseOnDirectionKeyPush : true,
                        pauseOnSwipe : true,
                        pauseOnDotsClick : true,
                        total: $FestivalSlideControlbox.find('.total'),
					    current : $FestivalSlideControlbox.find('.current'),
                    });

                    //프로그래스바
                    $this.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        var calc = ((nextSlide + 1) / (slick.slideCount)) * 100;
                        
                        $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc );
                        $progressBarLabel.text( calc + '% completed' );
                    });
                    
                    var SlideTotalVal = $FestivalSlideControlbox.find('.total').text(),
                        SlideCurrentVal = $FestivalSlideControlbox.find('.current').text(),
                        SlideProgressVal = ((SlideCurrentVal / SlideTotalVal) * 100);

                    $progressBar.css('background-size', SlideProgressVal + '% 100%').attr('aria-valuenow', SlideProgressVal );
                    $progressBarLabel.text( SlideProgressVal + '% completed' );
                });

                //페스티벌 탭메뉴 클릭
                $FestivalTabBtn.on('click', function () {
                    var $this = $(this),
                        $thisItem = $this.parent(),
                        thisIdx = $this.parent().index(),
                        $FestivalSlideWrap = $('.festival_slide_group .festival_slide_wrap'),
                        $MyFestivalSlideList = $FestivalSlideWrap.find('.festival_slide_list').eq(thisIdx),
                        $MyFestivalTextItem = $('.festival_text_list .festival_text_item').eq(thisIdx),
                        $OtherFestivalTextItem = $('.festival_text_list .festival_text_item').not($MyFestivalTextItem),
                        $FestivalBgItem = $('.festival_bg_wrap .festival_bg_item');
                    if(!$this.is('.active')){
                        $this.addClass('active');
                        $this.attr('title', '선택됨');
                        $thisItem.siblings().find('button').removeClass('active');
                        $thisItem.siblings().find('button').removeAttr('title');
                        $FestivalSlideWrap.eq(thisIdx).addClass('active').siblings().removeClass('active');
                        $OtherFestivalTextItem.removeClass('active');
                        $MyFestivalTextItem.addClass('active');
                        $MyFestivalSlideList.slick('setPosition');
                        $FestivalBgItem.eq(thisIdx).addClass('active').siblings().removeClass('active');
                        $FestivalBgItem.removeClass('time_ani delay0');
                        setTimeout(function(){
                            $FestivalBgItem.eq(thisIdx).addClass('time_ani');
                            $FestivalBgItem.eq(thisIdx).addClass('delay0');
                        }, 1)
                    }
                });


                //문화/행사 슬라이드
                var $CultureSlideBox = $('.culture_slide_box'),
                    $CultureSlideList = $CultureSlideBox.find('.culture_slide_list');

                $CultureSlideList.slick({
                    autoplaySpeed: 3000,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: true,
                    infinite: false,
                    prevArrow: $CultureSlideBox.find('.slide_btn.prev'),
                    nextArrow: $CultureSlideBox.find('.slide_btn.next'),
                    isRunOnLowIE : false,
                    pauseOnArrowClick : true,
                    pauseOnDirectionKeyPush : true,
                    pauseOnSwipe : false,
                    pauseOnDotsClick : true,
                    responsive: [
                        {
                          breakpoint: 1001,
                          settings: {
                            arrows: false,
                            variableWidth: true,
                          }
                        },
                    ]
                });


                //스탬프투어지도
                //지도 선언
                var $MapBtn = $('.map_img_item .map_button');
                $MapBtn.click(function(){
                    var $this = $(this),
                        thisDataArea = $this.attr('data-area'),
                        $MapImgItem = $('.tour_list .tour_item');

                    if(thisDataArea == 1){
                        $('.map_img_item .map_button.type1').addClass('active');
                        $('.map_img_item .map_button').not('.type1').removeClass('active');
                        $MapImgItem.eq()
                    }
                    if(thisDataArea == 2){
                        $('.map_img_item .map_button.type2').addClass('active');
                        $('.map_img_item .map_button').not('.type2').removeClass('active');
                    }
                    if(thisDataArea == 3){
                        $('.map_img_item .map_button.type3').addClass('active');
                        $('.map_img_item .map_button').not('.type3').removeClass('active');
                    }

                    $MapImgItem.eq(thisDataArea - 1).addClass('active').siblings().removeClass('active');
                    $MapImgItem.eq(thisDataArea - 2).addClass('noline').siblings().removeClass('noline');
                });


                //스탬프투어 탭
                var $TourListBtn = $('.tour_list_btn');
                $TourListBtn.on('click', function(){
                    var $this = $(this),
                        $TourItem = $this.parent().parent(),
                        $OtherTourItem = $TourItem.siblings(),
                        TourItemIndex = $TourItem.index(),
                        thisActive = $TourItem.is('.active');

                    if(!thisActive){
                        $TourItem.addClass('active');
                        $OtherTourItem.removeClass('active');
                        $OtherTourItem.removeClass('noline');
                        $OtherTourItem.removeClass('time_ani');
                        $('.tour_list .tour_item').eq((TourItemIndex - 1)).addClass('noline');

                        if(TourItemIndex == 0){
                            $OtherTourItem.removeClass('noline');
                        }
                        setTimeout(function(){
                            $TourItem.addClass('time_ani');
                        }, 1);
                    }

                    if(TourItemIndex == 0){
                        $('.map_img_item .map_button.type1').addClass('active');
                        $('.map_img_item .map_button').not('.type1').removeClass('active');
                    }
                    if(TourItemIndex == 1){
                        $('.map_img_item .map_button.type2').addClass('active');
                        $('.map_img_item .map_button').not('.type2').removeClass('active');
                    }
                    if(TourItemIndex == 2){
                        $('.map_img_item .map_button.type3').addClass('active');
                        $('.map_img_item .map_button').not('.type3').removeClass('active');
                    }
                })


                //투어 아이콘
                var $TourIconList = $('.tour_icon_box .tour_icon_list');

                $TourIconList.slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay : false,
                    dots: false,
                    arrows: false,
                    infinite: false,
                    responsive: [
                        {
                          breakpoint: 1001,
                          settings: {
                            dots: true,
                            slidesToShow: 4,
                            slidesToScroll: 3,
                          }
                        },
                    ]
                });
                

                //스크롤 애니메이션
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
                    if(!$('.rowgroup2').is('.active')){
                        $('.time_ani').removeClass('delay0');
                    }
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