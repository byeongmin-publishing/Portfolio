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

        //sns
		$('.sns .sns_btn').on('click', function() {
			var $this = $(this),
				$Parent = $this.parent('.sns'),
				IsActive = $Parent.is('.active'),
				$Layer = $this.siblings('.layer');
			if(!IsActive){
				$Parent.addClass('active');
				$this.attr('title', 'sns공유 목록 닫기');
				$Layer.fadeIn(200);
			} else{
				$Parent.removeClass('active');
				$this.attr('title', 'sns공유 목록 열기');
				$Layer.fadeOut(200);
			};
		});
		$('.sns .layer .sns_close').on('click', function() {
			var $this = $(this),
				$Parent = $this.parents('.sns'),
				$Layer = $this.parent('.layer'),
				$sns_btn = $('.sns .sns_btn');
			$Layer.fadeOut(200, function() {
				$Parent.removeClass('active');
				$sns_btn.attr('title', 'sns공유 목록 열기').focus();
			});
		});


		//zoom
		var nowZoom = 100;
		var ADD = 10;
		$('.zoom.z1').on('click', function() {
			nowZoom = nowZoom+ADD;
			$('body').css('zoom', nowZoom+'%');
			$('.firefox').css('transform', 'scale('+nowZoom/100+')').css('transform-origin', '0 0');
			return false;
		});
		$('.zoom.z2').on('click', function() {
			nowZoom = nowZoom-ADD;
			$('body').css('zoom', nowZoom+'%');
			$('.firefox').css('transform', 'scale('+nowZoom/100+')').css('transform-origin', '0 0');
			return false;
		});

		function zoomIn() {
			var $speech = $("#container");
			var currentSize = $speech.css("fontSize"); /* 폰트사이즈를 알아낸다. */
			/* parseFloat()은 숫자가 아니면 숫자가 아니라는 뜻의 NaN을 반환한다. */
			var num = parseFloat(currentSize, 10); 
			/* 끝에서부터 두자리의 문자를 가져온다. */
			var unit = currentSize.slice(-2); 
			num /= 1.4; /* num = num / 1.4 와 동일하다. */
			$speech.css("fontSize", num + unit);
	
			//nowZoom = nowZoom - 10;
			//if(nowZoom <= 70) nowZoom = 70;
			//zooms();
		}
	
		function zoomOut() {
	
			var $speech = $("#container");
			var currentSize = $speech.css("fontSize"); /* 폰트사이즈를 알아낸다. */
			/* parseFloat()은 숫자가 아니면 숫자가 아니라는 뜻의 NaN을 반환한다. */
			var num = parseFloat(currentSize, 10); 
			 /* 끝에서부터 두자리의 문자를 가져온다. */
			var unit = currentSize.slice(-2); 
			num *= 1.4;
			$speech.css("fontSize", num + unit);
				//nowZoom = nowZoom + 20;
				//if(nowZoom >= 500) nowZoom = 500;
				//zooms();
	
		}
	
		
		function zoomReset(){
			nowZoom = 100; 
			zooms();
		}
		
		function zooms(){
			document.body.style.zoom = nowZoom + '%';
			if(nowZoom==70){
				alert ("30%축소 되었습니다. 더 이상 축소할 수 없습니다.");
			}
	
			if(nowZoom==500){
				alert ("500%확대 되었습니다. 더 이상 확대할 수 없습니다.");
			}
		}

		

        $window.on('screen:tablet screen:phone', function(event) {
            
        });
    });
})(jQuery);