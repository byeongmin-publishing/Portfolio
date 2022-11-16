$(document).ready(function(){  
    $(".food-contents li").css("display", "none");
    $(".food-contents li:lt(6)").css("display","flex");

    // burger
    $(".category-contents li").eq(0).click(function(event){
    // Class ="category-contents li"를 누를때
    $(".food-contents li").css("display", "none");
    $(".food-contents li:lt(6)").css("display","flex");
        


        event.preventDefault();
        // 클릭 이벤트 제거

        $.ajax({
        // ajax에서

            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",
    
            success:function(data){ 
            // 성공했을 때

                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    // food-contents li 갯수 구하기

                    $(".food-img").eq(a).attr("src", data.food[0].burger.FoodImg[a]);
                    $(".food-title-kr").eq(a).text(data.food[0].burger.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].burger.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].burger.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].burger.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].burger.FoodBot[a]);
                });

            },
            error:function(){
            // 실패했을때

                console.log("error");
                // console에 error 입력
            }
        });  
    }); 



    // chicken
    $(".category-contents li").eq(1).click(function(event){
        $(".food-contents li").css("display", "none");
        $(".food-contents li:lt(2)").css("display","flex");
        event.preventDefault();
        $.ajax({
            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-img").eq(a).attr("src", data.food[0].chicken.FoodImg[a]);
                    $(".food-title-kr").eq(a).text(data.food[0].chicken.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].chicken.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].chicken.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].chicken.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].chicken.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 

    }); 



    // flat-top-dog
    $(".category-contents li").eq(2).click(function(event){
        $(".food-contents li").css("display", "none");
        $(".food-contents li:lt(2)").css("display","flex");
        event.preventDefault();
        $.ajax({
            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-img").eq(a).attr("src", data.food[0].flattopdog.FoodImg[a]);
                    $(".food-title-kr").eq(a).text(data.food[0].flattopdog.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].flattopdog.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].flattopdog.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].flattopdog.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].flattopdog.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 
    }); 



    // side
    $(".category-contents li").eq(3).click(function(event){
        $(".food-contents li").css("display", "none");
        $(".food-contents li:lt(2)").css("display","flex");
        event.preventDefault();
        $.ajax({
            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-img").eq(a).attr("src", data.food[0].side.FoodImg[a]);
                    $(".food-title-kr").eq(a).text(data.food[0].side.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].side.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].side.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].side.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].side.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 

    }); 



    // custard
    $(".category-contents li").eq(4).click(function(event){
        $(".food-contents li").css("display", "none");
        $(".food-contents li:lt(3)").css("display","flex");
        event.preventDefault();
        $.ajax({
            type : "GET",
            url:"../js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-img").eq(a).attr("src", data.food[0].custard.FoodImg[a]);
                    $(".food-title-kr").eq(a).text(data.food[0].custard.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].custard.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].custard.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].custard.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].custard.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 
    }); 



        // concretes
        $(".category-contents li").eq(5).click(function(event){
            $(".food-contents li").css("display","flex");
            event.preventDefault();
            $.ajax({
                type : "GET",
                url:"../js/foodndrink-data.json",
                dataType: "Json",  
                success:function(data){
                    $(".food-contents li").each(function(){
                        let a = $(this).index()
                        $(".food-img").eq(a).attr("src", data.food[0].concretes.FoodImg[a]);
                        $(".food-title-kr").eq(a).text(data.food[0].concretes.TitleKr[a]);
                        $(".food-title-en").eq(a).text(data.food[0].concretes.TitleEn[a]);
                        $(".food-text").eq(a).text(data.food[0].concretes.FoodText[a]);
                        $(".food-price-top").eq(a).html(data.food[0].concretes.FoodTop[a]);
                        $(".food-price-bot").eq(a).html(data.food[0].concretes.FoodBot[a]);
                        });
                },
                error:function(){
                    console.log("error");
                }
            }); 
        }); 



        // drink
        $(".category-contents li").eq(6).click(function(event){
            $(".food-contents li").css("display", "none");
            $(".food-contents li:lt(8)").css("display","flex");
            event.preventDefault();
            $.ajax({
                type : "GET",
                url:"../js/foodndrink-data.json",
                dataType: "Json",  
                success:function(data){
                    $(".food-contents li").each(function(){
                        let a = $(this).index()
                        $(".food-img").eq(a).attr("src", data.food[0].drink.FoodImg[a]);
                        $(".food-title-kr").eq(a).text(data.food[0].drink.TitleKr[a]);
                        $(".food-title-en").eq(a).text(data.food[0].drink.TitleEn[a]);
                        $(".food-text").eq(a).text(data.food[0].drink.FoodText[a]);
                        $(".food-price-top").eq(a).html(data.food[0].drink.FoodTop[a]);
                        $(".food-price-bot").eq(a).html(data.food[0].drink.FoodBot[a]);
                        });
                },
                error:function(){
                    console.log("error");
                }
            }); 
        }); 



        // beernwine
        $(".category-contents li").eq(7).click(function(event){
            $(".food-contents li").css("display", "none");
            $(".food-contents li:lt(9)").css("display","flex");
            event.preventDefault();
            $.ajax({
                type : "GET",
                url:"../js/foodndrink-data.json",
                dataType: "Json",  
                success:function(data){
                    $(".food-contents li").each(function(){
                        let a = $(this).index()
                        $(".food-img").eq(a).attr("src", data.food[0].beernwine.FoodImg[a]);
                        $(".food-title-kr").eq(a).text(data.food[0].beernwine.TitleKr[a]);
                        $(".food-title-en").eq(a).text(data.food[0].beernwine.TitleEn[a]);
                        $(".food-text").eq(a).text(data.food[0].beernwine.FoodText[a]);
                        $(".food-price-top").eq(a).html(data.food[0].beernwine.FoodTop[a]);
                        $(".food-price-bot").eq(a).html(data.food[0].beernwine.FoodBot[a]);
                        });
                },
                error:function(){
                    console.log("error");
                }
            }); 
        }); 



        // breakfast
        $(".category-contents li").eq(8).click(function(event){
            $(".food-contents li").css("display", "none");
            $(".food-contents li:lt(3)").css("display","flex");
            var botw = $(".food-price-bot .pack").width();
            $(".food-price-top .pack").css("width", botw);
            event.preventDefault();
            $.ajax({
                type : "GET",
                url:"../js/foodndrink-data.json",
                dataType: "Json",  
                success:function(data){
                    $(".food-contents li").each(function(){
                        let a = $(this).index()
                        $(".food-img").eq(a).attr("src", data.food[0].breakfast.FoodImg[a]);
                        $(".food-title-kr").eq(a).text(data.food[0].breakfast.TitleKr[a]);
                        $(".food-title-en").eq(a).text(data.food[0].breakfast.TitleEn[a]);
                        $(".food-text").eq(a).text(data.food[0].breakfast.FoodText[a]);
                        $(".food-price-top").eq(a).html(data.food[0].breakfast.FoodTop[a]);
                        $(".food-price-bot").eq(a).html(data.food[0].breakfast.FoodBot[a]);
                        });
                },
                error:function(){
                    console.log("error");
                }
            }); 
        }); 



        // woof
        $(".category-contents li").eq(9).click(function(event){
            $(".food-contents li").css("display", "none");
            $(".food-contents li:first").css("display","flex");
            event.preventDefault();
            $.ajax({
                type : "GET",
                url:"../js/foodndrink-data.json",
                dataType: "Json",  
                success:function(data){
                    $(".food-contents li").each(function(){
                        let a = $(this).index()
                        $(".food-img").eq(a).attr("src", data.food[0].woof.FoodImg[a]);
                        $(".food-title-kr").eq(a).text(data.food[0].woof.TitleKr[a]);
                        $(".food-title-en").eq(a).text(data.food[0].woof.TitleEn[a]);
                        $(".food-text").eq(a).text(data.food[0].woof.FoodText[a]);
                        $(".food-price-top").eq(a).html(data.food[0].woof.FoodTop[a]);
                        $(".food-price-bot").eq(a).html(data.food[0].woof.FoodBot[a]);
                        });
                },
                error:function(){
                    console.log("error");
                }
            }); 
        }); 
});


