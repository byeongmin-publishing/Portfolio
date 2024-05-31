"use strict";

try {
    //제이쿼리가 있으면
    this.jQuery = this.jQuery || undefined;

    //제이쿼리가 있으면
    if(jQuery) {
        //$ 중복방지
        (function($) {
            $(function() {
                var $window = $(window),
                    $html = $('html'),
                    $footer = $('#footer');

                /* 푸터 배너 */
                var $footerBannerButton = $footer.find('.footer_banner .tit');

                $footerBannerButton.on('click', function(){
                    var $this = $(this);

                    if($this.hasClass('on')){
                        $footerBannerButton.removeClass('on');
                        $this.removeClass('on').next('.cont_box').slideUp(300);
                    } else {
                        $footerBannerButton.removeClass('on').next('.cont_box').slideUp(300);
                        $this.addClass('on').next('.cont_box').slideDown(300);
                    }
                });

                /* 상단으로 */
                var $bodyHtml = $('body,html'),
                    $upButton = $footer.find('.up_button');

                $upButton.click(function(){
                    $bodyHtml.stop().animate({
                        scrollTop: 0
                    }, 250);
                });

            });
        })(jQuery);
    }
}catch(e) {
    console.error(e);
}