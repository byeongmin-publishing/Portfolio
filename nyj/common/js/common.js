(function($) {
    'use strict';

    $(function() {

        var $window = $(window),
        $html = $('html'),
        $header = $('#header'),
        $container = $('#container'),
        debounce = null;

        //device check
        function screen(){
            var windowWidth = $window.outerWidth();

            if(windowWidth > 1000){
                window.mode = 'pc';
            }else{
                window.mode = 'mobile';
            }

            /* window.Homde 사용시
            var windowHeight = $window.outerHeight();

            if(windowHeight > 880){
                window.Hmode = 'MaxHeight';
            }else{
                window.Hmode = 'MinHeight';
            }*/
        }
        screen();

        //lnb
        var $lnb = $header.find('.lnb'),
            $lnbShow = $lnb.find('.menu_show'),
            $lnbHide = $lnb.find('.menu_hide'),
            $lnbDepthItem = $lnb.find('.depth_item'),
            $lnbMenu = $lnb.find('.menu'),
            $lnbDepth2FirstChild = $lnbMenu.find('.depth2 > :first-child'),
            lnbHeight;

        function refreshlnbHeight() {
            $html.removeClass('lnb_show lnb_open');
            lnbHeight = $lnbMenu.css('transition-property', 'none').removeClass('init').outerHeight() || '';
            $lnbMenu.css('transition-property', '').addClass('init').height('');
        }
        refreshlnbHeight();

        $window.on('resize', function () {
            clearTimeout(debounce);
            debounce = setTimeout(function (){
                screen();
            }, 100);

            refreshlnbHeight();
        });

        $lnbShow.on('click', function(event) {
            $html.addClass('lnb_show');

            if(mode === 'mobile') {
                //2단메뉴일때 1차메뉴에 active가 없을때
                if($lnbMenu.hasClass('multiple') && $lnb.find('.depth1_item').hasClass('active') === false){
                    $lnb.find('.depth1_item:first-child').addClass('active');
                }
            }
        });

        $lnbHide.on('click', function(event) {
            $html.removeClass('lnb_show');
        });

        $lnbDepthItem.on('mouseover focusin', function(event) { //mouseover
            if(mode === 'pc') {
                var $this = $(this),
                    $depth1Itme = ($this.hasClass('depth1_item')) ? $this : $this.parents('.depth1_item');

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
                    $lnbMenu.height(lnbHeight + ($depth1Itme.find('.depth2 > :first-child').outerHeight() || ''));
                }

                $html.addClass('lnb_open');
                $lnbDepthItem.removeClass('active');
                $this.addClass('active').parents('li').addClass('active');
            }

            event.stopPropagation();

        }).on('click', function(event) {
            if(mode === 'mobile') {
                var $this = $(this),
                    $depthText = $this.children('.depth_text'),
                    eventTarget = event.target;

                if($depthText.find(eventTarget).length || $depthText[0] === eventTarget) {
                    if($this.hasClass('depth1_item')) {
                        if($this.hasClass('active')) {
                            $html.removeClass('lnb_open');
                        }else{
                            $html.addClass('lnb_open');
                        }
                    }

                    if($this.children('.depth2').length) {
                        if($lnbMenu.hasClass('multiple')) { //모바일 2단 메뉴일때
                            $this.addClass('active').siblings('.depth_item').removeClass('active');
                        }else{
                            $this.toggleClass('active').siblings('.depth_item').removeClass('active');
                        }
                        event.preventDefault();
                    }

                    if($this.children('.depth3, .depth4, depth5').length) {
						var $Depth = $this.children('.depth'),
                            DepthDisplay = $Depth.css('display');
                        if (DepthDisplay !== 'none') {//하위메뉴가 display:none이 아니면 실행
							$this.toggleClass('active').siblings('.depth_item').removeClass('active');
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
            }
        });

        $lnbMenu.find('.depth1_item:last-child .depth2 .depth2_itemst .depth2_item:last-child .depth2_text').on('focusout', function(event) {
            if(mode === 'pc') {
                $lnbMenu.height('');
                $html.removeClass('lnb_open');
                $lnbDepthItem.removeClass('active');
            }
        });

        $lnbMenu.on('mouseleave', function(event) {//mouseleave
            if(mode === 'pc') {
                $lnbMenu.height('');
                $html.removeClass('lnb_open');
                $lnbDepthItem.removeClass('active');
            }
        });

        //side
        var $side = $container.find('.side'),
            $sideDepthLI = $side.find('.depth_item'),
			$sideSpy = $side.find('.spy:last');

        $sideDepthLI.on('click', function(event) {
            var $this = $(this),
                $depthText = $this.children('.depth_text'),
                eventTarget = event.target;

            if($depthText.find(eventTarget).length || $depthText[0] === eventTarget) {
                if($this.hasClass('depth1_item')) {
                    if($this.hasClass('active')) {
                        $html.removeClass('side_open');
                    }else{
                        $html.addClass('side_open');
                    }
                }

                if($this.children('.depth').length) {
                    $this.toggleClass('active').siblings('.depth_item').removeClass('active');
                    event.preventDefault();
                }
            }

            event.stopPropagation();
        }).each(function(index, element) {
            var $element = $(element);

            if($element.children('.depth').length) {
                $element.addClass('has');
            }
        });
		if($sideSpy.length) {
			$html.addClass('side_open');
			$sideSpy.parents('.depth_item').addClass('active');
		}

        //toggle
        var $toggle = $('.toggle'),
            $toggleSelector = $toggle.find('[class*="_show"], [class*="_hide"]');

        $toggleSelector.on('click', function (event) {
            var $this = $(this),
                $parent = $this.parents('.toggle'),
                parentClass = $this.closest('.toggle').attr('class').replace(/\s+\active/g,'').split(/\s+/).slice(-2)[0].replace(/_item/,'');

            if($this.is('[class*="_show"]')){
                if ($parent.siblings().hasClass('active')){
                    $parent.siblings().removeClass('active');
                    $html.removeClass(parentClass + '_open');
                }
                $html.toggleClass(parentClass + '_open');
                $parent.toggleClass('active');
            }

            if($this.is('[class*="_hide"]')){
                $html.removeClass(parentClass + '_open');
                $this.closest('.active').removeClass('active');
            }
        });

        //fixed
        function scroll(){
            if($window.scrollTop() <= 0){
                $html.removeClass('fixed');
            }else{
                $html.addClass('fixed');
            }
        }
        scroll();
        $window.on('scroll', function() {
            scroll();
        });

    });

})(window.jQuery);
