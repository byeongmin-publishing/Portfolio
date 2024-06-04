

(function($) {
	'use strict';

	var $window = $(window),
		$document = $(document),
		$html = $('html'),
		$head = $('head'),
		$screen = $.screen,
		$inArray = $.inArray;

	$(function() {
		var $window = $(window),
			$html = $('html'),
			$container = $('#container'),
			$footer = $('#footer');

		//사이드
		var $container = $('#container'),
			$side = $container.find('.side'),
			$sideDepthItem = $side.find('.depth_item'),
			$sideSpy = $side.find('.spy:last');

		$sideDepthItem.on('click.menu', function(event) {
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
			}else{
				$element.addClass('solo');
			}
		});

		if($sideSpy.length) {
			$html.addClass('side_open');
			$sideSpy.parents('.depth_item').addClass('active');
		}


		//여기서부터 코드 작성해주세요

		/* cms 탭메뉴 */
		var $tabMenu = $container.find('.tab_menu'),
			$tabPanel =  $tabMenu.find('.tab_depth6'),
			$tabItem =  $tabMenu.find('.tab_anchor'),
			$tabSelect = $tabMenu.find('.tab_select');

		/*
                $tabItem.on('click', function(event){
                    var $this = $(this);
                        //$tabMargin = ;
                    if($this.closest('.tab_item').find('.tab_depth6').length > 0){

                        $this.closest('.tab_item').addClass('active').siblings('.tab_item').removeClass('active');
                        $this.closest('.tab_item').find('.tab_depth6').css('margin-left', $tabItem.offset().left - $this.offset().left + 'px');

                        event.preventDefault();
                    }
                });
        */
		$tabSelect.click(function () {
			var $this = $(this),
				$ParentTabmenu = $this.parent('.tab_menu'),
				IsActive = $ParentTabmenu.is('.active');
			if(!IsActive){
				$ParentTabmenu.find('.tab_panel').slideDown('250', 'easeOutExpo');
				$ParentTabmenu.addClass('active');
			} else{
				$ParentTabmenu.find('.tab_panel').slideUp('250', 'easeOutExpo');
				$ParentTabmenu.removeClass('active');
			};

		});

		/* 컨텐츠 탭메뉴 */
		var $tab = $container.find('.tab'),
			$tabButton = $tab.find('.tab_button'),
			$tabContent = $tab.find('.tab_content'),
			tabActiveText = $tab.find('.tab_menu .tab_item.active').text();

		$tab.find('.tab_select span').text(tabActiveText);

		$tabButton.click(function () {
			var $this = $(this),
				index = $tabButton.index(this),
				tabButtonText = $this.text(),
				IsTabAll = $this.is('.tab_all'),
				$tab_panel = $this.parents('.tab_panel'),
				$tab_menu = $this.parents('.tab_menu');
			$this.attr('title', '선택됨').closest('.tab_item').addClass('active').siblings('.tab_item').removeClass('active').find('.tab_button').removeAttr('title');
			$this.parents('.tab').find('.tab_select span').text(tabButtonText);
			if(IsTabAll){
				$tabContent.addClass('active');
			} else{
				$tabContent.eq(index-1).addClass('active').siblings('.tab_content').removeClass('active');
			};
			if($.screen.settings.state[0] === 'phone'){
				$tab_menu.removeClass('active');
				$tab_panel.slideUp();

			};

		});

		$('.tab_menu').not($('.prettyprint').children()).each(function() {
			var li_length = $(this).children('ul').find('li').length;
			$(this).addClass('divide'+li_length);
		});

		/*테이블 반응형*/
		$('table.table.responsive').not($('.prettyprint').children()).each(function() {
			var RowSpanExist = $(this).find('td, th').is('[rowspan]'),
				TheadExist = $(this).find('thead').length;
			if((RowSpanExist==false) && (TheadExist!=0)){//rowspan이 없을 경우만 실행 (rowspan이 있으면 지원불가)
				$(this).children('tbody').children('tr').find('th, td').each(function() {
					var ThisIndex = $(this).index(),
						TheadText = $(this).parents('tbody').siblings('thead').find('th').eq(ThisIndex).text();
                    $(this).attr('data-content', TheadText);
				});
				$(this).children('tfoot').children('tr').find('th, td').each(function() {
					var ThisIndex = $(this).index(),
						TheadText = $(this).parents('tfoot').siblings('thead').find('th').eq(ThisIndex).text();
					$(this).attr('data-content', TheadText);
				});
			};
		});

		//인풋 포커스
		var selectTarget = $('.sd_input input[type="text"]');
		selectTarget.on({
			'focus' : function () {
				$(this).parent().addClass('focus');
			},
			'blur' : function () {
				$(this).parent().removeClass('focus');
			}
		});

		//테이블 thead tr 두 개 이상 스타일
		$('table.table').each(function(index, element){
			var $thisTr = $(element).find('thead tr'),
				trIndex = $thisTr.length,
				HsClass = $(element).is('.tr_over');
			if(!HsClass){
				if (trIndex > 1) {
					$(element).addClass('tr_over');
				}
			}
		});

		//sns
		$('.addons .share .addons_button').on('click', function () {
			var $this = $(this),
				$snsbox = $this.parent('.share'),
				$layer = $this.siblings('.share_panel'),
				OnOff = $snsbox.is('.active');
			if (!OnOff) {
				//$snsbox.addClass('active');
				$this.attr('title', 'sns 공유 닫기').text('sns 공유 닫기');
				$layer.animate({
					width: "show"
				}, 250, function () {
					//$snsbox.addClass('active');
				});
				$snsbox.addClass('active');
			} else {
				$snsbox.removeClass('active');
				$this.attr('title', 'sns 공유 열기').text('sns 공유 열기');
				$layer.animate({
					width: "hide"
				}, 250);
			};
		});
		$('.addons .share .share_close').on('click', function () {
			var $this = $(this),
				$snsbox = $this.parents('.share'),
				$layer = $this.parent('.share_panel'),
				$sns_btn = $layer.siblings('.addons_button');
			$snsbox.removeClass('active');
			$layer.animate({
				width: "hide"
			}, 250);
			$sns_btn.attr('title', 'sns 공유 열기').text('sns 공유 열기').focus();
        });

		$window.on('screen', function(event) {
			/* 스텝 자동 높이 */
			function stepAutoHeight(){
				var $step = $container.find('.step'),
					$stepList = $step.find('.step_list'),
					$stepItem = $stepList.find('.step_item');

				$stepList.each(function (index, element) {
					var $element = $(element),
						$elementStepItem = $element.find('.step_item'),
						height = 0,
						width = 0,
						count;

					if($element.parent().hasClass('type3')){
						$($elementStepItem, element).each(function (index) {
							var $this = $(this),
								$thisStepBox = $this.parents('.step_box'),
								$thisboxHeight = $thisStepBox.find('.step_process').height();

							if ($thisboxHeight > height) {
								$this.eq(0).height($thisboxHeight);
							}

						});

					} else if(!$element.parent().hasClass('type3')){
						$($elementStepItem, element).each(function (index) {
							var $this = $(this),
								thisWidth = $this.find('.step_content').width(),
								thisHeight = $this.find('.step_content').height();

							if (thisWidth > width){
								width = thisWidth;
							}

							if (thisHeight > height) {
								height = thisHeight;
							}

							// if($step.hasClass('type3')){
							//     if (nextHeight > height){
							//         height = nextHeight;
							//     }
							// }

							// 스텝박스 텍스트있을때 min-height 조정
							// if($this.find('.text').length > 0){
							//     $this.css('min-height', '157px');
							// }

							count = index + 1;
						}).height(height);
					}

				});
			}
			stepAutoHeight();

			// $window.on('screen', function(event) {
			// 	stepAutoHeight();
			// });

			/*박스 자동 높이*/
			function boxAutoHeight(){
				var $colboxList = $container.find('.col_box'),
					$colboxItem = $colboxList.find('.col_item');

				$colboxList.each(function (index, element) {
					var $element = $(element),
						$elementcolboxItem = $element.find('.box'),
						height = 0,
						width = 0,
						count;
					$($elementcolboxItem, element).each(function (index) {
						var $this = $(this),
							thisHeight = $this.find('.box_content').height();


						if (thisHeight > height) {
							height = thisHeight;
						}
                    
                        console.log(thisHeight);

						count = index + 1;
					}).height(height);

					$element.closest('.col_box').addClass('length' + count);
				});
			}
			boxAutoHeight();
			// $window.on('screen', function(event) {
			// 	boxAutoHeight();
            // });
            
            /*게시판 faq*/
            var $Faqbtn = $('.bbs__faq').find('.p-accordion__button');
            
            $Faqbtn.on('click', function() {
                var $this = $(this),
                    Isopen = $this.is('.active');

                if (Isopen){
                    $this.attr('title','답변보기');
                    
                } else {
                    $this.attr('title','답변닫기');
                }

            });

        });

		$window.on('screen:tablet screen:phone', function(event) {

		});
	});
})(jQuery);
