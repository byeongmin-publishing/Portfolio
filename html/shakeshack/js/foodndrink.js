$(document).ready(function(){

    // 매장별 콘크리트 안내
    $(".view-info").click(function(e){
        e.preventDefault();
        $(".store-info-bg").fadeIn(300).css("dispay", "flex");
    });
    $(".store-info-bg").click(function(e){
        e.preventDefault();
        $(this).fadeOut(300);
    });



    // 카테고리 클릭, on 애니메이션
    $(".category-contents li:first").addClass("on");
    $(".category-contents li").click(function(e){
        e.preventDefault();
        i = $(this).index();
        console.log(i);
        $(this).addClass("on").siblings().removeClass("on");
    });



    // index에서 페이지 이동 시 카테고리 클릭
    if (location.hash == "#spot1") {
        $('#spot1, .spot1').trigger("click");
        $('#spot1, .spot1').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot2") {
        $('#spot2, .spot2').trigger("click");
        $('#spot2, .spot2').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot3") {
        $('#spot3, .spot3').trigger("click");
        $('#spot3, .spot3').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot4") {
        $('#spot4, .spot4').trigger("click");
        $('#spot4, .spot4').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot5") {
        $('#spot5, .spot5').trigger("click");
        $('#spot5, .spot5').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot6") {
        $('#spot6, .spot6').trigger("click");
        $('#spot6, .spot6').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot7") {
        $('#spot7, .spot7').trigger("click");
        $('#spot7, .spot7').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot8") {
        $('#spot8, .spot8').trigger("click");
        $('#spot8, .spot8').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot9") {
        $('#spot9, .spot9').trigger("click");
        $('#spot9, .spot9').parent("li").addClass("on").siblings().removeClass("on");
    } else if (location.hash == "#spot10") {
        $('#spot10, .spot10').trigger("click");
        $('#spot10, .spot10').parent("li").addClass("on").siblings().removeClass("on");
    }
});