(function($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
		$screen = $.screen,
        $inArray = $.inArray;

    $(function() {
        //여기서부터 코드 작성해주세요
        //공유하기
		$('.sns_share .addons_button').on('click', function() {
			var $this = $(this),
				$Parent = $this.parent('.sns_share'),
				IsActive = $Parent.is('.active'),
				$Layer = $this.siblings('.share_panel');

				$Parent.addClass('active');
				$this.attr('title', 'sns 목록닫기');
				$Layer.fadeIn(200);
		});
        $('.sns_share .share_panel .share_close').on('click', function() {
			var $this = $(this),
				$Parent = $this.parents('.sns_share'),
				$Layer = $this.parent('.share_panel'),
				$Share_btn = $('.sns_share .addons_button');
                
				$Parent.removeClass('active');
				$Share_btn.attr('title', 'sns 목록 열기').focus();
                $Layer.fadeOut(200);
		});


        //서브비주얼
        $('.sub_visual').addClass('on');

        // 반응형 테이블
        $('table.table.responsive').each(function() {
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

        //템플릿 가짜 셀렉트
        $('.select_box .select_btn').on('click', function(){
            var $this = $(this),
                $MyParent = $this.parent('.select_box'),
                IsActive = $MyParent.is('.active'),
                $List = $this.siblings('.select_list');
            if (!IsActive) {
                $MyParent.addClass('active');
                $List.slideDown();
                $this.attr('title', '하위메뉴닫기');
            } else {
                $MyParent.removeClass('active');
                $List.slideUp();
                $this.attr('title', '하위메뉴열기');
            }
        });

        $('.select_box .select_list .select_anchor').on('click', function (){
            var $this = $(this),
                $MyParent = $this.parent('li'),
                IsActive = $MyParent.is('.active'),
                ThisText = $this.text(),
                $OtherParents = $MyParent.siblings('li'),
                $SelectBox = $this.parents('.select_box'),
                $Layer = $this.parents('.select_list'),
                $SelectBtn = $Layer.siblings('.select_btn');
            $SelectBox.removeClass('active');
            $SelectBtn.text(ThisText).attr('title', '하위메뉴열기');
            $Layer.slideUp();
        });

		//프린트
		$('.addons .addons_item .printbtn').on('click', function(){
			var $contents = $('#contents'),
				ContentsClass = $contents.attr('class');
			var $head = $('head').clone();
			var $contentsClone = $('#contents').clone();    // 프린트 할 특정 영역 복사
			
			var headHtml = $head[0].innerHTML;
			var innerHtml = $contentsClone[0].innerHTML;
			var popupWindow = window.open("", "_blank", "width=1100,height=800");
			popupWindow.document.write('<!DOCTYPE html>'+
			  '<html>'+
				'<head>'+headHtml+'</head>'+
				'<body><div id="contents" class="'+ContentsClass+' print_wrap">'+innerHtml+'</div></body>'+
			  '</html>')
		   
			popupWindow.document.close();
			popupWindow.focus();

			setTimeout(function(){
				popupWindow.print();         // 팝업의 프린트 도구 시작
				popupWindow.close();       // 프린트 도구 닫혔을 경우 팝업 닫기
			}, 1000);
		});

        $window.on('screen:tablet screen:phone', function(event) {
            
        });
    });
})(jQuery);