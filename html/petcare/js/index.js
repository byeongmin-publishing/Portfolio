$(".question").mouseenter(function(){
    $(".qustion-text").stop().fadeIn(500);
})
$(".question").mouseleave(function(){
    $(".qustion-text").stop().fadeOut(500);
})