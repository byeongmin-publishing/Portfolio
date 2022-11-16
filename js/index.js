$(".mobile-menu-btn").click(function(e){

    e.preventDefault();

    $(this).toggleClass("change");
    $(".mobile-menu").toggleClass("change");
});
$(".mobile-menu a").click(function(e){

    // e.preventDefault();

    if($(".mobile-menu").has("change")){
        $(".mobile-menu").removeClass("change");
        $(".mobile-menu-btn").removeClass("change");
    }
});
$("#projectA-button").click(function(e){

    e.preventDefault();

    window.open("html/petcare-flowchart.html", "a", "width=900, height=1600, left=50");
});

$("#projectC-button").click(function(e){

    e.preventDefault();

    window.open("html/sherpa-design.html", "a", "width=900, height=1600, left=50");
});
$(window).scroll(function () { 

    history.scrollRestoration = "manual"

	var Value = $(document).scrollTop(); 
    
    console.log(Value); 

    $(".main-menu li").click(function(e){

        Move = $(this).index();
        
        e.preventDefault();

        $('html,body').scrollTop(Move*601);

    });

    if(Value < 600){

        // 배경
        $(".section").removeClass("change");

        // 박스사이즈
        $(".main-box").removeClass("change change2");
        $(".main-box-slide").removeClass("slide1 slide2 slide3 slide4 slide5");
        $(".main-box-slide").addClass("slide0");

        // 로고
        $(".main-logo-wrap").removeClass("change");

        // 메뉴
        $(".main-menu").removeClass("change");
        $(".main-menu li").eq(0).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "0px"});

        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change");
        $(".scroll-copy-wrap").removeClass("change2");
        

    }
    if(Value > 600){

        // 배경
        $(".section").removeClass("change");

        // 박스사이즈
        $(".main-box").addClass("change");
        $(".main-box").removeClass("change2");
        $(".main-box-slide").removeClass("slide0 slide2 slide3 slide4 slide5");
        $(".main-box-slide").addClass("slide1");

        // 로고
        $(".main-logo-wrap").addClass("change");
        
        // 메뉴
        $(".main-menu").removeClass("change");
        $(".main-menu li").eq(1).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "-43px"});

        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change2");
        $(".scroll-copy-wrap").addClass("change");

    }
    if(Value > 1200){

        // 배경
        $(".section").removeClass("change");

        // 박스사이즈
        $(".main-box").addClass("change");
        $(".main-box").removeClass("change2");
        $(".main-box-slide").removeClass("slide1 slide0 slide3 slide4 slide5");
        $(".main-box-slide").addClass("slide2");

        // 메뉴
        $(".main-menu").removeClass("change");
        $(".main-menu li").eq(2).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "-86px"});
        
        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change2");
        $(".scroll-copy-wrap").addClass("change");

    }
    if(Value > 1800){

        // 배경
        $(".section").removeClass("change");

        // 박스사이즈
        $(".main-box").addClass("change");
        $(".main-box").removeClass("change2");
        $(".main-box-slide").removeClass("slide1 slide2 slide0 slide4 slide5");
        $(".main-box-slide").addClass("slide3");

        // 메뉴
        $(".main-menu").removeClass("change");
        $(".main-menu li").eq(3).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "-86px"});
        
        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change2");
        $(".scroll-copy-wrap").addClass("change");

    }
    if(Value > 2400){

        // 배경
        $(".section").removeClass("change");

        // 박스사이즈
        $(".main-box").addClass("change");
        $(".main-box").removeClass("change2");
        $(".main-box-slide").removeClass("slide1 slide2 slide3 slide0 slide5");
        $(".main-box-slide").addClass("slide4");

        // 메뉴
        $(".main-menu").removeClass("change");
        $(".main-menu li").eq(4).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "-86px"});
        
        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change2");
        $(".scroll-copy-wrap").addClass("change");

    }
    if(Value > 3000){

        // 배경
        $(".section").addClass("change");

        // 박스사이즈
        $(".main-box").addClass("change2");
        $(".main-box-slide").removeClass("slide1 slide2 slide3 slide4 slide0");
        $(".main-box-slide").addClass("slide5");

        // 메뉴
        $(".main-menu").addClass("change");
        $(".main-menu li").eq(5).addClass("on").siblings().removeClass("on");
        $(".mobile-menu-btn img").attr("src","img/mobile_menu-fff.svg");

        // 타이틀
        $(".title").eq(0).css({"margin-top" : "-129px"});
        
        // 카피라이트 & 스크롤
        $(".scroll-copy-wrap").removeClass("change");
        $(".scroll-copy-wrap").addClass("change2");

    }
});