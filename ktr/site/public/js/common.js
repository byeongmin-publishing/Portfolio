$(document).on('ready.responsive', function(event) {
    $.screen({
        state : [{
            name : 'wide',
            horizontal : {
                from : 9999,
                to : 1201
            }
        }, {
            name : 'web',
            horizontal : {
                from : 1200,
                to : 1001
            }
        }, {
            name : 'tablet',
            horizontal : {
                from : 1000,
                to : 641
            }
        }, {
            name : 'phone',
            horizontal : {
                from : 640,
                to : 0
            }
        }, {
			name : 'maxheight',
			vertical : {
				from : 9999,
				to : 850
			}
		}, {
			name : 'minheight',
			vertical : {
				from : 849,
				to : 0
			}
		}]
    });
});

// 네이버 api 키
var naverID = 
{
    clientID : 'nzvx29b3rw'
};
// 탭메뉴 공통적으로 사용
function tabOn(tab,num,img) {
	var $tab,$tab_btn;
	var tabid=tab, n=num-1, btn_img=img;

	$tab = $(tabid+'> ul > li');
	$tab_btn = $(tabid+'> ul > li > a');

	$tab_btn.siblings().hide();
	$tab.eq(n).addClass('active');
	$tab.eq(n).children('a').siblings().show();

	if(btn_img =='img'){
		var btn = $tab.eq(n).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab_btn.on("click",function(event){
		var realTarget = $(this).attr('href');

		if(realTarget != "#"){
			return
		}
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}
		$tab_btn.siblings().hide();
		$tab_btn.parent().removeClass('active');

		$(this).siblings().show();
		$(this).parent().addClass('active');

		event.preventDefault();
	});
}

function tabOrg(tabid,a,img) {
	var $tab, $tab_btn,$obj,$obj_view;
	var tabid = tabid, num = a, btn_img = img;

	$tab = $(tabid+' .tab_item  > li');
	$tab_btn = $(tabid+' .tab_item > li > a');
	$obj = $(tabid+' .tab_obj');
	$obj_view = $(tabid+' .tab_obj.n'+num);

	$tab.eq(num-1).addClass('active');
	$obj_view.show();

	if(btn_img =='img'){
		var btn = $tab.eq(num-1).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab.bind("click",function(event){
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}

		var this_eq = $tab.index( $(this) );
		$tab.removeClass('active');
		$tab.eq(this_eq).addClass('active');

		$obj.hide();
		$(tabid+' .tab_obj.n'+(this_eq+1)).show();

		event.preventDefault ();
	});
}

$(document).ready(function(){
	//이미지 롤오버 
	$('.overimg').mouseover(function (){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_off.','_on.'));	
	}).mouseout(function(){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_on.','_off.'));
	});
});

/**
 * @author (주)한신정보기술 퍼블리셔팀
 * @since 2019-03-18
 * @version 1.0.0
 */
(function($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
		$screen = $.screen,
        $inArray = $.inArray;

    //브라우저
    var _browser = navigator.userAgent.toLowerCase();

    //ie7일 때
    if(_browser.indexOf('msie 7.0') > -1) {
        _browser = 'ie ie7';

    //ie8일 때
    }else if(_browser.indexOf('msie 8.0') > -1) {
        _browser = 'ie ie8';

    //ie9일 때
    }else if(_browser.indexOf('msie 9.0') > -1) {
        _browser = 'ie ie9';

    //ie10일 때
    }else if(_browser.indexOf('msie 10.0') > -1) {
        _browser = 'ie ie10';

    //ie11일 때
    }else if(_browser.indexOf('trident/7.0') > -1) {
        _browser = 'ie ie11';

    //edge일 때
    }else if(_browser.indexOf('edge') > -1) {
        _browser = 'edge MS';

	}else if(_browser.indexOf('edg/') > -1) {
		_browser = 'edge chromium_based';

    //opera일 때
    }else if(_browser.indexOf('opr') > -1) {
        _browser = 'opera';

    //chrome일 때
    }else if(_browser.indexOf('chrome') > -1) {
        _browser = 'chrome';

    //firefox일 때
    }else if(_browser.indexOf('firefox') > -1) {
        _browser = 'firefox';

    //safari일 때
    }else if(_browser.indexOf('safari') > -1) {
        _browser = 'safari';
    }else{
        _browser = 'unknown';
    }

    /**
     * @name 브라우저 얻기
     * @since 2017-12-06
     * @return {string}
     */
    window.getBrowser = function() {
        return _browser;
    };

    //브라우저 클래스 추가
    $html.addClass(_browser);

    $(function() {
        var $body = $('body'),
            $htmlAndBody = $html.add($body),
            $wrapper = $('#wrapper'),
            $header = $('#header'),
            $container = $('#container'),
            $footer = $('#footer');
		
		
        $window.on('screen:wide screen:web', function(event) {
            window.mode = 'pc';
        });

        $window.on('screen:tablet screen:phone', function(event) {
            window.mode = 'mobile';
        });

        //lnb
        var $lnb = $header.find('.lnb'),
            $lnbShow = $header.find('.menu_show'),
            $lnbShowBtn = $lnbShow.find('.menu_button'),
            $lnbHide = $lnb.find('.menu_hide'),
            $lnbHideBtn = $lnbHide.find('.menu_button'),
            $lnbDepthItem = $lnb.find('.depth_item'),
            $lnbMenu = $lnb.find('.menu'),
            $lnbDepth2FirstChild = $lnbMenu.find('.depth2 > :first-child'),
            $lnbSpy = $lnbMenu.find('.spy:last'),
            lnbHeight;
		if(!$lnb.find('.depth2').length){
			$header.attr('data-depth', 'none');
		}
        $lnbSpy.parents('.depth_item').addClass('actived');
		$lnbSpy.parents('.depth_item').prev('.depth_item').addClass('actived_prev');
		$lnbSpy.parents('.depth_item').next('.depth_item').addClass('actived_next');

        function refreshLnbHeight() {
            lnbHeight = $lnbMenu.css('transition-property', 'none').outerHeight() || '';

            $lnbMenu.css('transition-property', '');
        }

        $lnbShowBtn.on('click', function(event) {
            //클래스 토글
            $html.toggleClass('lnb_show');
        });

        $lnbHideBtn.on('click', function(event) {
            //클래스 토글
            $html.removeClass('lnb_show');
        });
		$('.lnb_curtain button').on('click', function(event) {
            $html.removeClass('lnb_show');
        });

        $lnbDepthItem.on('mouseover focusin', function(event) {
            if(mode === 'pc') {
                var $this = $(this),
                    $depth1Item = ($this.hasClass('depth1_item')) ? $this : $this.parents('.depth1_item');
				if(!$header.is('[data-depth="none"]')){
					if($lnbMenu.hasClass('pulldown')) {
						var maxHeight = 0;

						$lnbDepth2FirstChild.each(function(index, element) {
							var $element = $(element),
								outerHeight = $element.outerHeight() || 0;

							//기존 값 보다 얻은 값이 초과일 때
							if(outerHeight > maxHeight) {
								maxHeight = outerHeight;
							}
						});

						$lnbMenu.height(lnbHeight + maxHeight);
					}else if($lnbMenu.hasClass('eachdown')) {
						$lnbMenu.height(lnbHeight + ($depth1Item.find('.depth_list').outerHeight() || ''));
					}
				}
                $html.addClass('lnb_open');
                $lnbDepthItem.removeClass('active active_prev active_next');
                $this.addClass('active');
				$this.prev('.depth_item').addClass('active_prev');
				$this.next('.depth_item').addClass('active_next');
				$this.parents('li').addClass('active');
				$this.parents('li').prev('.depth_item').addClass('active_prev');
				$this.parents('li').next('.depth_item').addClass('active_next');
            }
            event.stopPropagation();
        }).on('click', function(event) {
            if(mode === 'mobile') {
                var $this = $(this),
                    $depthText = $this.children('.depth_text'),
                    eventTarget = event.target,
					IsActive = $this.is('.active');

                if($depthText.find(eventTarget).length || $depthText[0] === eventTarget) {
                    if($this.hasClass('depth1_item')) {
                        if($this.hasClass('active')) {
                            $html.removeClass('lnb_open');
                        }else{
                            $html.addClass('lnb_open');
                        }
                    }

                    if($this.children('.depth').length) {
						var $Depth = $this.children('.depth'),
							DepthDisplay = $Depth.css('display');
						if(DepthDisplay!=='none'){//하위메뉴가 display:none이 아니면 실행
							if(!IsActive){
								$this.removeClass('active_prev active_next');
								$this.addClass('active').siblings('.depth_item').removeClass('active active_prev active_next');
								$this.prev('.depth_item').addClass('active_prev');
								$this.next('.depth_item').addClass('active_next');
							} else{
								$this.removeClass('active');
								$this.siblings('.depth_item').removeClass('active_prev active_next');
							}
							event.preventDefault();
						}
                    }
                }
            }

            event.stopPropagation();
        }).each(function(index, element) {
            var $element = $(element);

            if($element.children('.depth').length) {
                $element.addClass('has');
            }else{
                $element.addClass('solo');
            }
        });

        $lnbMenu.on('mouseleave', function(event) {
            if(mode === 'pc') {
                $lnbMenu.height('');
                $html.removeClass('lnb_open');
                $lnbDepthItem.removeClass('active active_prev active_next');
            }
        });

		var $Depth1ItemLast = $lnb.find('.depth1_item:last-child'),
			Depth1ItemIsSolo = $Depth1ItemLast.is('.solo');
		if(Depth1ItemIsSolo){
			$Depth1ItemLast.find('>.depth_text').on('focusout', function(event) {
				if(mode === 'pc') {
					$lnbMenu.height('');
					$html.removeClass('lnb_open');
					$lnbDepthItem.removeClass('active active_prev active_next');
				}
			});
		} else{
			var $Depth2ItemLast = $Depth1ItemLast.find('.depth2_item:last-child'),
				Depth2ItemIsSolo = $Depth2ItemLast.is('.solo');
			if(Depth2ItemIsSolo){
				$Depth2ItemLast.find('>.depth_text').on('focusout', function(event) {
					if(mode === 'pc') {
						$lnbMenu.height('');
						$html.removeClass('lnb_open');
						$lnbDepthItem.removeClass('active active_prev active_next');
					}
				});
			} else{
				$lnb.find('.depth1_item:last-child .depth:visible:last').find('> .depth_list > .depth_item:last-child .depth_text').on('focusout', function(event) {
					if(mode === 'pc') {
						$lnbMenu.height('');
						$html.removeClass('lnb_open');
						$lnbDepthItem.removeClass('active active_prev active_next');
					}
				});
			}
		}

		//여기서부터 코드 작성해주세요

        //언어선택(pc)
        var $LangBtn = $('.lnb_bottom_list .lang_box .lnb_bottom_item.lang'),
            $LangListBox = $('.lnb_bottom_list .lang_box .lang_list_box');
        $LangBtn.on('click', function(){
            var $this = $(this);

            if(!$this.is('.active')){
                $this.addClass('active');
                $this.attr('title', '언어 목록열기');
                $LangListBox.addClass('active');
            }else{
                $this.removeClass('active');
                $this.attr('title', '언어 목록닫기');
                $LangListBox.removeClass('active');
            }
        })

        //언어선택(phone, tablet)
        var $MobileLangBtn = $('.menu_tab_list .menu_tab_item.lang .menu_tab_text'),
            $MobileLangListBox = $('.menu_tab_list .menu_tab_item.lang .lang_list_box');
        $MobileLangBtn.on('click', function(){
            var $this = $(this);

            if(!$this.is('.active')){
                $this.addClass('active');
                $this.attr('title', '언어 목록열기');
                $MobileLangListBox.addClass('active');
            }else{
                $this.removeClass('active');
                $this.attr('title', '언어 목록닫기');
                $MobileLangListBox.removeClass('active');
            }
        })


        //container - 바텀패스
        var $BottomPath = $('.bottom_path_wrap .bottom_path');

        $BottomPath.each(function(){
            var $this = $(this),
                $BottomPathSelect = $this.find('.bottom_path_select'),
                $ListWrap = $this.find('.list_wrap');

            $BottomPathSelect.on('click', function(){
                if(!$BottomPathSelect.is('.active')){
                    $('.bottom_path_select').removeClass('active');
                    $BottomPath.find('.list_wrap').slideUp(300, 'swing');
                    $BottomPathSelect.addClass('active');
                    $('.bottom_path_select').attr('title', '목록열기');
                    $BottomPathSelect.attr('title', '목록닫기');
                    $ListWrap.slideDown(300, 'swing');
                }else{
                    $BottomPathSelect.removeClass('active');
                    $BottomPathSelect.attr('title', '목록열기');
                    $ListWrap.slideUp(300, 'swing');
                }
            })
        })


        //lnb커튼, 메뉴 닫기
        var $Lnb = $('#header .lnb'),
            $LnbCurtain = $('#header .lnb_curtain'),
            $LnbMenuHide = $('#header .lnb .menu_hide .menu_button'),
            $LnbMenuShow = $('#header .header_box .wrap .menu_show .menu_button');

            $LnbMenuShow.on('click', function(){
                $Lnb.addClass('active');
                $LnbCurtain.fadeIn();
            });
            $LnbMenuHide.on('click', function(){
                $Lnb.removeClass('active');
                $LnbCurtain.fadeOut();
            });

            $LnbCurtain.on('click', function(){
                $Lnb.removeClass('active');
                $LnbCurtain.fadeOut();
            });


        //본문바로가기
        $('.accessibility a').on("keydown", function(e) {
			if (e.keyCode == 13) { // enter key
				$('.rowgroup1 .slide_control_btn').focus();
				e.preventDefault();
			}
		});


        $window.on('screen:wide screen:web', function(event) {
            refreshLnbHeight();

            if($lnbSpy.length) {
                $html.removeClass('lnb_open');
                $lnbSpy.parents('.depth_item').removeClass('active');
				$lnbDepthItem.removeClass('active_prev active_next');
            }
        });

        $window.on('screen:tablet screen:phone', function(event) {
            refreshLnbHeight();

            if($lnbSpy.length) {
                $html.addClass('lnb_open');
                $lnbSpy.parents('.depth_item').addClass('active');
				$lnbSpy.parents('.depth_item').prev('.depth_item').addClass('active_prev');
				$lnbSpy.parents('.depth_item').next('.depth_item').addClass('active_next');
            }
        });
    });

    $document.on('ready', function(event) {
        /**
         * @link {https://github.com/JungHyunKwon/screen}
         */
        $screen({
            state : [{
                name : 'wide',
                horizontal : {
                    from : 9999,
                    to : 1201
                }
            }, {
                name : 'web',
                horizontal : {
                    from : 1200,
                    to : 1001
                }
            }, {
                name : 'tablet',
                horizontal : {
                    from : 1000,
                    to : 641
                }
            }, {
                name : 'phone',
                horizontal : {
                    from : 640,
                    to : 0
                }
            }]
        });
    });

    $window.on('load', function(event) {

        $window.on('screen:resize', function(event) {
            
        }).triggerHandler('screen:resize');
    });
})(jQuery);