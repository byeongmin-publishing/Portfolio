$(document).ready(function(){
    $.ajax({
            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",
            success:function(data){ 
                $(".event-tab li").click(function(e){
                    e.preventDefault();
                    i = $(this).index();
                    $(this).addClass("on").siblings().removeClass("on");
                    if(i == 0){
                        $(".event-contents-none").remove();
                        $(".event-contents").css("display","flex");
                        $(".event-contents-img img").eq(0).attr("src","../img/shakeshack-event-store-contents-01.png")
                        $(".event-contents-title").eq(0).text("매 달 22일은 쉑데이! 쉑버거 2개 + 프라이 + 쉐이크 + 소다(S)")
                        $(".event-contents-sub").eq(0).text("상시 진행");

                        $(".event-contents-title").eq(1).text("미국 한정 메뉴 '로드사이드 버거' 한국 출시!!")
                        $(".event-contents-sub").eq(1).text("~11월 14일");
                    }

                    if(i == 1){
                        $(".event-contents-none").remove();
                        $(".event-contents:eq(0)").css("display","flex");
                        $(".event-contents:eq(1)").css("display","none");
                        $(".event-contents-img img").eq(0).attr("src","../img/shakeshack-event-sns-contents-01.png")
                        $(".event-contents-title").eq(0).text("쉐이크쉑 잠실점 오픈!! Instargram 해시태그 이벤트!")
                        $(".event-contents-sub").eq(0).text("상시 진행");
                        // $(".event-contents:lt("+i+")").remove();
                    }

                    if(i == 2){
                        $(".event-contents").css("display","none");
                        $(".event").append("<li class='event-contents-none'>진행중인 이벤트가 없습니다.</li>")
                    }
                });
            },
            error:function(){
                console.log("error");
            }
        });  

})
